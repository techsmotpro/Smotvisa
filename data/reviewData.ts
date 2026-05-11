export interface Review {
    id: string;
    name: string;
    role: string;
    location: string;
    rating: number;
    comment: string;
    avatar: string;
}

export const fetchReviews = async (): Promise<Review[]> => {
    return [
        {
            id: "1",
            name: "Priya Sharma",
            role: "Tourist",
            location: "Dubai, UAE",
            rating: 5,
            comment: "The process was incredibly smooth. I got my Schengen visa in record time without any hassle.",
            avatar: "/images/small--Y9qzfea.webp"
        },
        {
            id: "2",
            name: "Rahul Mehta",
            role: "Business Traveler",
            location: "London, UK",
            rating: 5,
            comment: "Highly professional service. They handled my US B1/B2 visa application perfectly.",
            avatar: "/images/small--Y9qzfea.webp"
        },
        {
            id: "3",
            name: "Ananya Iyer",
            role: "Student",
            location: "Toronto, Canada",
            rating: 4,
            comment: "Great support throughout the student visa process. They answered all my queries patiently.",
            avatar: "/images/small--Y9qzfea.webp"
        },
        {
            id: "4",
            name: "Vikram Patel",
            role: "Tourist",
            location: "Sydney, Australia",
            rating: 5,
            comment: "Excellent service! The entire process was hassle-free and the support team was very helpful.",
            avatar: "/images/small--Y9qzfea.webp"
        }
    ];
};
