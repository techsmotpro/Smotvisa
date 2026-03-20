export default function Loading() {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
            <div className="relative">
                <div className="w-20 h-20 border-4 border-secondary/20 border-t-secondary rounded-full animate-spin" />
                <div className="absolute inset-0 border-4 border-secondary/10 rounded-full animate-pulse blur-sm" />
            </div>
            
            <div className="mt-8 text-center animate-pulse">
                <h2 className="text-xl font-display font-bold text-foreground mb-2">Analyzing Routes</h2>
                <p className="text-sm font-body text-muted-foreground italic tracking-wide">Fetching best international airfares from India...</p>
            </div>
        </div>
    );
}
