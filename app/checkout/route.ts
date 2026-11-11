import {
  CHECKOUT_SUCCESS_URL,
  PADDLE_ADVANCED_PRICE_ID,
  PADDLE_CLIENT_TOKEN,
} from "@/lib/checkout/paddle";

const checkoutConfig = JSON.stringify({
  token: PADDLE_CLIENT_TOKEN,
  priceId: PADDLE_ADVANCED_PRICE_ID,
  successUrl: CHECKOUT_SUCCESS_URL,
});

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <title>hotkeygo Advanced</title>
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <script src="https://cdn.paddle.com/paddle/v2/paddle.js"></script>
    <style>:root{color-scheme:light;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f5f3ee;color:#16131f}main{width:min(440px,calc(100% - 40px));padding:32px;border:1px solid #dedbd4;border-radius:18px;background:white;box-shadow:0 18px 60px rgba(17,21,20,.08)}.eyebrow{margin:0 0 10px;color:#6959d9;font:700 12px/1.2 "JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.08em}h1{margin:0;font-size:32px;letter-spacing:-.04em}.price-row{display:flex;align-items:center;gap:14px;margin:18px 0 4px}.price{margin:0;font-size:28px;font-weight:750}.face{white-space:pre;font:800 15px/1 "JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,monospace;text-shadow:-1.25px 0 #00d8f0,1.25px 0 #ff2d9b}.billing-details{margin:0 0 24px;color:#646b68}button{width:100%;min-height:48px;border:0;border-radius:12px;background:#16131f;color:white;font:inherit;font-weight:700;cursor:pointer}button:disabled{cursor:not-allowed;opacity:.55}button:focus-visible{outline:3px solid #d9ccff;outline-offset:3px}#status{min-height:20px;margin:14px 0 0;color:#646b68;font-size:13px;text-align:center}</style>
  </head>
  <body><main><p class="eyebrow">hotkeygo</p><h1>Advanced</h1><div class="price-row"><p class="price">$10 / month</p><span class="face" data-open="[ ¬_¬ ]" data-shut="[ -_- ]">[ ¬_¬ ]</span></div><p class="billing-details">More room to work. Cancel anytime.</p><button id="checkout" disabled>Preparing checkout…</button><p id="status" role="status"></p></main>
    <script>
      const config=${checkoutConfig};
      const button=document.getElementById("checkout");const status=document.getElementById("status");
      const installationID=new URLSearchParams(location.hash.slice(1)).get("installation_id")||"";
      if(!/^[A-Za-z0-9_-]{43}$/.test(installationID)){button.textContent="Open checkout from the hotkeygo app";status.textContent="This link is missing your hotkeygo installation. Use Get Advanced in the app.";}
      else{
        const successUrl=config.successUrl+"?installation_id="+encodeURIComponent(installationID);
        Paddle.Initialize({token:config.token,eventCallback(event){if(event.name==="checkout.completed")status.textContent="Payment completed. Activating Advanced…";if(event.name==="checkout.payment.error")status.textContent="The payment didn’t go through. Try another card or payment method.";}});
        function openCheckout(){status.textContent="";Paddle.Checkout.open({items:[{priceId:config.priceId,quantity:1}],customData:{hotkeygo_installation_id:installationID},settings:{variant:"one-page",successUrl}});}
        button.disabled=false;button.textContent="Get Advanced";button.addEventListener("click",openCheckout);openCheckout();
      }
      if(!matchMedia("(prefers-reduced-motion: reduce)").matches){const face=document.querySelector(".face");setInterval(()=>{face.textContent=face.dataset.shut;setTimeout(()=>face.textContent=face.dataset.open,170)},4200)}
    </script>
  </body>
</html>`;

export function GET() {
  return new Response(html, {
    headers: {
      "Cache-Control": "public, max-age=300, s-maxage=300",
      "Content-Type": "text/html; charset=utf-8",
      "X-Frame-Options": "DENY",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
