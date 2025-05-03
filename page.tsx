
'use client';
import { useState } from "react";

export default function ReelRemedyCharter() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="text-center p-6 bg-blue-900 text-white">
        <img src="/logo.png" alt="Logo" className="mx-auto mb-4 w-32 h-auto" />
        <h1 className="text-4xl font-bold">Reel Remedy Charter LLC</h1>
        <p className="text-lg">Sunset Dolphin Cruises in Pensacola, FL</p>
      </header>

      <section className="w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/sunset-cruise-placeholder.jpg')" }} />

      <section className="p-8 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Our Cruise</h2>
        <p className="text-lg">
          Located at 14032 Waterview Dr, Pensacola, FL — enjoy a peaceful 4-hour dolphin sunset cruise perfect for families and couples.
        </p>
        <p className="text-lg mt-2">Cash-only bookings — $600 flat rate.</p>
      </section>

      <section className="p-8 bg-blue-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Book Your Cruise</h2>
          <p className="mb-4">Booking is manual. Please call or message us to confirm availability.</p>
          <div className="mt-6">
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-800">Book Now for $600</button>
          </div>
        </div>
      </section>

      <footer className="bg-blue-900 text-white text-center p-6 mt-8">
        <p>© {new Date().getFullYear()} Reel Remedy Charter LLC | Cash Payments Only</p>
        <p>Visit us at 14032 Waterview Dr, Pensacola, FL</p>
      </footer>
    </div>
  );
}
