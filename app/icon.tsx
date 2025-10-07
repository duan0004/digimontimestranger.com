import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 512,
  height: 512,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  // This creates a fallback icon if logo.png is not available
  // Once you add logo.png, Next.js will use that instead
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 256,
          background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        DTS
      </div>
    ),
    {
      ...size,
    }
  );
}
