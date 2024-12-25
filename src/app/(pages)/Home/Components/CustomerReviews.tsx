import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { CustomerReviewProps } from "@/interfaces";

export function CustomerReview({
  name,
  avatar,
  review,
  rating,
}: CustomerReviewProps) {

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="py-10 px-14">
        <div className="flex items-center mb-4">
          <Avatar className="h-10 w-10 mr-4 bg-primary">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300">{review}</p>
      </CardContent>
    </Card>
  );
}
