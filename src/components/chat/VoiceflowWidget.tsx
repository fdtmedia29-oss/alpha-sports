import Script from "next/script";

/* Alpha-Sports-Chatbot (Voiceflow, Projekt „Alpha Sports — KI-Assistent“).
   Wissen, Prompt und Aussehen leben in Voiceflow, hier wird der Chat nur geladen.
   Quellen für Wissen und Prompt: clients/alpha-sports/chatbot/ im Workspace.

   versionID 'production' = immer die zuletzt veröffentlichte Version, also nach
   einem Publish in Voiceflow nichts am Code ändern (geht seit 26.10.2026 wieder).
   Die Projekt-Kennung ist kein Geheimnis, sie steht im Quelltext jeder Seite.

   public/chat.css wird in den Chat hineingeladen und setzt den Chat-Knopf über den
   grünen WhatsApp-Knopf. Geladen wird erst nach dem Aufbau der Seite. */
const PROJECT_ID = "6a4fdf1fa7603984cf148198";

export default function VoiceflowWidget() {
  return (
    <Script id="alpha-chat-laden" strategy="lazyOnload">
      {`(function(d,t){
        var v=d.createElement(t), s=d.getElementsByTagName(t)[0];
        v.onload=function(){
          window.voiceflow.chat.load({
            verify: { projectID: '${PROJECT_ID}', versionID: 'production' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
            assistant: { stylesheet: '/chat.css' }
          });
        };
        v.src='https://cdn.voiceflow.com/widget-next/bundle.mjs';
        v.type='text/javascript';
        s.parentNode.insertBefore(v,s);
      })(document,'script');`}
    </Script>
  );
}
