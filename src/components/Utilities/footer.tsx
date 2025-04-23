const FooterAnime = () => {
    return (
        <footer className="bg-[#27548A] text-white py-5">
            <div className="container mx-auto text-center">
                {/* Atau versi lebih lengkap */}
                <div className="flex flex-col md:flex-row justify-between items-center px-4">
                    <div className="text-md">
                        © 2024 AnimeTales. All Rights Reserved.
                    </div>
                    <div className="text-md">
                        Made by Rizki Rahmadani
                    </div>
                    <div className="text-md">
                        Powered by Next.js
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterAnime