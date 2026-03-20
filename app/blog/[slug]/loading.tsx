export default function Loading() {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
            <div className="relative">
                {/* Main Spinner Ring */}
                <div className="w-20 h-20 border-4 border-secondary/20 border-t-secondary rounded-full animate-spin" />
                
                {/* Secondary Pulsing Ring */}
                <div className="absolute inset-0 border-4 border-secondary/10 rounded-full animate-pulse blur-sm" />
            </div>
            
            <div className="mt-8 text-center animate-pulse">
                <h2 className="text-xl font-display font-bold text-foreground mb-2">Fetching Article</h2>
                <p className="text-sm font-body text-muted-foreground italic tracking-wide">Preparing your travel guide...</p>
            </div>

        </div>
    );
}
