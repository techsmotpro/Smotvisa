// This file will centralize the navigation data to be used across the app
import { offices } from "./officeData";

export const visaCountries = [
    { id: "us", name: "United States", flag: "🇺🇸", href: "/visa/us-visa-consultant" },
    { id: "uk", name: "United Kingdom", flag: "🇬🇧", href: "/visa/uk-visa-consultant" },
    { id: "canada", name: "Canada", flag: "🇨🇦", href: "/visa/canada-visa-consultant" },
    { id: "australia", name: "Australia", flag: "🇦🇺", href: "/visa/australia-visa-consultant" },
    { id: "uae", name: "UAE", flag: "🇦🇪", href: "/visa/uae-visa-consultant" },
    { id: "schengen", name: "Schengen", flag: "🇪🇺", href: "/visa/schengen-visa-consultant" },
];

export const services = [
    {
        id: "visa",
        name: "Visa",
        href: "/services",
        submenu: visaCountries.map(c => ({ id: c.id, name: c.name, flag: c.flag, href: c.href }))
    },
    { id: "tours", name: "Tours", href: "/services/tours" },
    { id: "air-ticketing", name: "Air Ticketing", href: "/services/air-ticketing" }
];

export const branches = [
    {
        id: "maharashtra",
        name: "Maharashtra",
        submenu: [
            { id: "bandra-east-mumbai", name: "Bandra East, Mumbai", href: "/contact/mumbai/visa-agents-in-bandra-east" },
            { id: "kandivali-mumbai", name: "Kandivali, Mumbai", href: "/contact/mumbai/visa-agents-in-kandivali" },
            { id: "shivaji-nagar-pune", name: "Shivaji Nagar, Pune", href: "/contact/pune/visa-agents-in-shivaji-nagar" },
            { id: "yerwada-pune", name: "Yerwada, Pune", href: "/contact/pune/visa-agents-in-yerwada" }
        ]
    },
    {
        id: "delhi",
        name: "Delhi",
        href: "/contact/delhi/visa-agents-in-connaught-place"
    },
    {
        id: "andhra-pradesh",
        name: "Andhra Pradesh",
        submenu: [
            { id: "walter-visakhapatnam", name: "Walter, Visakhapatnam", href: "/contact/visakhapatnam/visa-agents-in-walter" }
        ]
    },
    {
        id: "karnataka",
        name: "Karnataka",
        submenu: [
            { id: "cv-raman-nagar-bangalore", name: "CV Raman Nagar, Bangalore", href: "/contact/bangalore/visa-agents-in-cv-raman-nagar" }
        ]
    },
    {
        id: "ahmedabad",
        name: "Ahmedabad",
        href: "/contact/ahmedabad/visa-agents-in-ahmedabad"
    },
    {
        id: "jaipur",
        name: "Jaipur",
        href: "/contact/jaipur/visa-agents-in-jaipur"
    }
];

export const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services", dropdown: services },
    { label: "Destinations", href: "/visa" },
    { label: "Branches", href: "/contact", dropdown: branches },
    { label: "Blog", href: "/blog" },
    { label: "Visa Checker", href: "/visa-checker" },
];
