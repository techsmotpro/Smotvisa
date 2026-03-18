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
    // Simulate API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: "1",
                    name: "Sarah Jenkins",
                    role: "Tourist",
                    location: "Dubai, UAE",
                    rating: 5,
                    comment: "The process was incredibly smooth. I got my Schengen visa in record time without any hassle.",
                    avatar: "https://i.pravatar.cc/150?u=sarah"
                },
                {
                    id: "2",
                    name: "Michael Chen",
                    role: "Business Traveler",
                    location: "London, UK",
                    rating: 5,
                    comment: "Highly professional service. They handled my US B1/B2 visa application perfectly.",
                    avatar: "https://i.pravatar.cc/150?u=michael"
                },
                {
                    id: "3",
                    name: "Priya Sharma",
                    role: "Student",
                    location: "Toronto, Canada",
                    rating: 4,
                    comment: "Great support throughout the student visa process. They answered all my queries patiently.",
                    avatar: "https://i.pravatar.cc/150?u=priya"
                },
                {
                    id: "4",
                    name: "David Smith",
                    role: "Tourist",
                    location: "Sydney, Australia",
                    rating: 5,
                    comment: "Excellent service! The entire process was hassle-free and the support team was very helpful.",
                    avatar: "https://i.pravatar.cc/150?u=david"
                }
            ]);
        }, 1000);
    });
};
