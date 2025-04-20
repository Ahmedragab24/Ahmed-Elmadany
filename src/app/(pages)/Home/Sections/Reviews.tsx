"use client";

import { CustomerReview } from "../Components/CustomerReviews";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Review } from "@/interfaces";
import { getReviews } from "@/lib/appwrite/api";
import { useLanguage } from "@/providers/LanguageContextProvider";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ReviewCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const { lang } = useLanguage();
  const [reviewsData, setReviewsData] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Set up the carousel API
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Fetch reviews data
  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      try {
        const response = await getReviews();
        setReviewsData(response);
        setError(null);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError("Failed to load reviews. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section className="section" id="CustomerReviews">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="sectionTitle"
      >
        {lang === "English" ? "Customer Reviews" : "آراء العملاء"}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative w-full max-w-4xl mx-auto"
      >
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 p-4">{error}</div>
        ) : reviewsData.length === 0 ? (
          <div className="text-center p-4">No reviews available.</div>
        ) : (
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-mr-2">
              {reviewsData.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-full lg:basis-1/2"
                >
                  <div className="p-1">
                    <CustomerReview
                      name={review.name}
                      avatar={review.avatar}
                      review={review.review}
                      rating={review.rating}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {reviewsData.length > 1 && (
              <>
                <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 sm:-ml-6">
                  <CarouselPrevious className="rounded-full border-primary" />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 sm:-mr-6">
                  <CarouselNext className="rounded-full border-primary" />
                </div>

                {/* Custom pagination dots */}
                <div className="flex justify-center mt-4 space-x-2">
                  {Array.from({ length: count }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={`h-2 w-2 rounded-full transition-colors ${
                        index === current ? "bg-primary" : "bg-gray-300"
                      }`}
                      aria-label={`Go to review ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </Carousel>
        )}
      </motion.div>
    </section>
  );
}
