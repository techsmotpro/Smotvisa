export interface Review {
    id: string;
    name: string;
    role: string;
    location: string;
    rating: number;
    comment: string;
    date: string;
}

export const fetchReviews = async (): Promise<Review[]> => {
    return [
        {
            id: "1",
            name: "Baki Hanma",
            role: "Tourist",
            location: "Schengen Visa",
            rating: 5,
            comment: "Getting my Schengen tourist visa was easy with Smotvisa's support. They guided me in choosing the correct embassy and prepared all required documents properly.",
            date: "2025-01-15"
        },
        {
            id: "2",
            name: "Bindu Rajesh",
            role: "Tourist",
            location: "Australia Visa",
            rating: 4,
            comment: "I applied for an Australia tourist visa through Smotvisa and received great support. Their team assisted with financial documentation and the entire process was smooth.",
            date: "2025-01-20"
        },
        {
            id: "3",
            name: "Amal Raj",
            role: "Tourist",
            location: "Schengen Visa",
            rating: 5,
            comment: "Thanks to Smotvisa, I got my Schengen tourist visa without any complications. They helped select the correct embassy and prepared all documents properly. The consultants were professional and supportive throughout the process. I highly recommend Smotvisa for Schengen visa assistance.",
            date: "2025-01-25"
        },
        {
            id: "4",
            name: "Santhosh P",
            role: "Business Traveler",
            location: "US Visa",
            rating: 4,
            comment: "I applied for my US B1 visa through Smotvisa's Hari and had a smooth experience. The team guided me through documentation and interview preparation. Very professional and responsive staff. I highly recommend Smotvisa for reliable US visa assistance for Indian citizens.",
            date: "2025-02-01"
        }
    ];
};