import { useEffect } from 'react';

const JotForm = () => {
  useEffect(() => {
    // Load the JotForm embed handler dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;

    script.onload = () => {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler(
          "iframe[id='JotFormIFrame-252647060829260']",
          'https://form.jotform.com/'
        );
      }
    };

    document.head.appendChild(script);

    // Optional cleanup
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full ">
      <iframe
        id="JotFormIFrame-252647060829260"
        title="New Customer Registration Form"
        onLoad={() => window.parent.scrollTo(0, 0)}
        allow="geolocation; microphone; camera; fullscreen; payment"
        src="https://form.jotform.com/252647060829260"
        style={{
          minWidth: '100%',
          maxWidth: '100%',
          border: 'none',
        }}
      />
    </div>
  );
};

export default JotForm;
