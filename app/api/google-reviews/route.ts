import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: 'Google Maps API configuration missing' },
      { status: 500 }
    );
  }

  try {
    // Fetch place details including reviews from Google Places API
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
    
    const response = await fetch(url, {
      next: { revalidate: 300 } // Cache for 5 minutes
    });
    
    const data = await response.json();
    
    if (data.status === 'OK') {
      return NextResponse.json({
        rating: data.result.rating || 0,
        totalReviews: data.result.user_ratings_total || 0,
        reviews: data.result.reviews || []
      });
    } else {
      console.error('Google Maps API error:', data.status, data.error_message);
      return NextResponse.json(
        { error: 'Failed to fetch reviews from Google Maps', details: data.error_message },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
