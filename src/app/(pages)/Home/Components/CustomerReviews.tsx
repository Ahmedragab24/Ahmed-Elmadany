import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Review } from "@/interfaces";
import { MoveRight, Star } from "lucide-react";
import { memo, useState } from "react";

export const CustomerReview = memo(function CustomerReview({
  name = "",
  avatar = "",
  review = "",
  rating = 0,
}: Partial<Review>) {
  // Ensure rating is within valid range
  const safeRating = Math.max(0, Math.min(5, rating));
  const [seeMore, setSeeMore] = useState(false);
  const toggleSeeMore = () => setSeeMore((prev) => !prev);

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-sm bg-secondary">
      <CardContent className="py-6 px-6 sm:py-10 sm:px-14">
        <div className="flex items-center mb-4">
          <Avatar className="h-10 w-10 mr-4 bg-primary">
            <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
            <AvatarFallback>
              {name ? name.charAt(0).toUpperCase() : "?"}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <div
              className="flex"
              aria-label={`Rating: ${safeRating} out of 5 stars`}
            >
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < safeRating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-200 flex flex-col items-start">
          <p className={` ${seeMore ? "" : "line-clamp-2"}`}>{review}</p>
          {review.length > 100 && (
            <Button
              variant="link"
              onClick={toggleSeeMore}
              className="text-primary text-sm hover:underline !p-0 group flex items-center"
            >
              <p>{seeMore ? "See less" : "See more"}</p>
              <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
});
