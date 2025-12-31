const { useState, useEffect } = React;

function App() {
    const [isMessageRevealed, setIsMessageRevealed] = useState(false);

    const handleOpenCapsule = () => {
        setIsMessageRevealed(true);
    };

    useEffect(() => {
        const emojis = [ "🌿", "✨", "🤍", "🌸"];
        const container = document.getElementById("emoji-background");

        function createEmoji() {
            const emoji = document.createElement("div");
            emoji.className = "floating-emoji";
            emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

            emoji.style.left = Math.random() * 100 + "vw";
            emoji.style.animationDuration = 12 + Math.random() * 10 + "s";
            emoji.style.fontSize = 18 + Math.random() * 18 + "px";

            container.appendChild(emoji);

            setTimeout(() => {
                emoji.remove();
            }, 22000);
        }

        const interval = setInterval(createEmoji, 900);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
            {/* Floating Emojis Background */}
            <div id="emoji-background"></div>
            
            <div className="text-center content-wrapper">
                
                {/* Title */}
                <h1 className="title fade-in">⌛ Time Capsule</h1>
                
                {/* Subtitle */}
                <p className="subtitle fade-in">Every moment of 2025, lovingly sealed.</p>
                
                
                {/* Section Title */}
                <h2 className="section-title fade-in-delay">🔒 The Capsule</h2>
                
                {/* Lock Section */}
                {!isMessageRevealed && (
                    <div className="lock-section fade-in-delay-3">
                        <p className="lock-text"> This capsule holds heartfelt wishes from Dipti</p>
                        <p className="lock-text">To be opened as you step into 2026.</p>
                    </div>
                )}
                
                {/* Action Button */}
                {!isMessageRevealed && (
                    <button 
                        className="btn btn-lg btn-custom fade-in-delay-4"
                        onClick={handleOpenCapsule}
                        aria-label="Open time capsule when the time is right"
                    >
                        ❤️ Open When the Time Is Right
                    </button>
                )}
                
                {/* Revealed Message */}
                {isMessageRevealed && (
                    <div className="revealed-message">
                        <h3 className="message-title">🌙 Message is for you...</h3>
                        
                        <div className="spiritual-message">
                            <p>🌅 A new year begins.</p>
                            <p>🌬️ Take a quiet breath.</p>
                            <p>🍃 Release what feels heavy.</p>
                            <p>🕊️ Welcome peace, good health, and gentle joy.</p>
                            <p className="highlight">✨ Happy New Year to you <br></br>and your family 🎉</p>
                            <p className="signature">— Warm wishes from Dipti Patil</p>
                        </div>
                    </div>
                )}
                
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
