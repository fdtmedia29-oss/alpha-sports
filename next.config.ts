import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old landing pages → new pages
      { source: "/personal-traininglp", destination: "/personal-training", permanent: true },
      { source: "/lp-online-coaching", destination: "/online-coaching", permanent: true },
      { source: "/ernaehrungsberatung-lp", destination: "/ernaehrungsberatung", permanent: true },
      { source: "/analysen-lp", destination: "/analysen", permanent: true },
      { source: "/hyrox-lp", destination: "/hyrox", permanent: true },
      { source: "/gruppenkurse-lp", destination: "/gruppenkurse", permanent: true },

      // Old individual analysis pages → analysen with anchors
      { source: "/inbody-koerperanalyse", destination: "/analysen#inbody", permanent: true },
      { source: "/stoffwechselanalyse", destination: "/analysen#stoffwechsel", permanent: true },
      { source: "/leistungsanalyse", destination: "/analysen#leistung", permanent: true },
      { source: "/analysen/koerper-analyse", destination: "/analysen#inbody", permanent: true },
      { source: "/analysen/stoffwechsel-analyse", destination: "/analysen#stoffwechsel", permanent: true },
      { source: "/analysen/leistungs-analyse", destination: "/analysen#leistung", permanent: true },

      // Old personal training sub-pages → personal-training
      { source: "/personal-training/community-training", destination: "/gruppenkurse", permanent: true },
      { source: "/personal-training/ernahrungscoaching", destination: "/ernaehrungsberatung", permanent: true },
      { source: "/personal-training/schwangerschafts-coaching", destination: "/gruppenkurse", permanent: true },
      { source: "/personal-training/partner-training", destination: "/personal-training", permanent: true },

      // Old group class pages → gruppenkurse with anchors
      { source: "/bootcamp-2", destination: "/gruppenkurse#bootcamp", permanent: true },
      { source: "/hypertrophic", destination: "/gruppenkurse#hypertrophic", permanent: true },
      { source: "/yoga-3", destination: "/gruppenkurse#yoga", permanent: true },
      { source: "/pilates", destination: "/gruppenkurse#pilates", permanent: true },

      // Old booking pages → kontakt
      { source: "/kostenloses-beratungsgespraech", destination: "/kontakt", permanent: true },
      { source: "/terminbuchung-kostenloses-beratungsgespraech", destination: "/kontakt", permanent: true },
      { source: "/terminbuchung-kostenloses-beratungsgespraech-probetraining", destination: "/kontakt", permanent: true },
      { source: "/terminbuchung-gruppenkurs", destination: "/kontakt", permanent: true },
      { source: "/terminbuchung-inbody-koerperanalyse", destination: "/kontakt", permanent: true },
      { source: "/terminbuchung-stoffwechselanalyse", destination: "/kontakt", permanent: true },
      { source: "/terminbuchung-leistungsanalyse", destination: "/kontakt", permanent: true },
      { source: "/anamnese_fragebogen", destination: "/kontakt", permanent: true },
      { source: "/beratung_fragebogen", destination: "/kontakt", permanent: true },

      // Old misc pages
      { source: "/gallerie", destination: "/ueber-uns", permanent: true },
      { source: "/startseite", destination: "/", permanent: true },
      { source: "/mehr", destination: "/", permanent: true },
      { source: "/preise-neu", destination: "/preise", permanent: true },
      { source: "/news-de", destination: "/", permanent: true },
      { source: "/blog-de", destination: "/", permanent: true },
      { source: "/blog-archive", destination: "/", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/impressum-2", destination: "/impressum", permanent: true },

      // Old Ziele (goals) pages → personal-training
      { source: "/ziele/gewicht-reduzieren", destination: "/personal-training", permanent: true },
      { source: "/ziele/muskeln-aufbauen", destination: "/personal-training", permanent: true },
      { source: "/ziele/schmerzfrei-werden", destination: "/personal-training", permanent: true },
      { source: "/ziele/sportartspezifisch-trainieren", destination: "/personal-training", permanent: true },
      { source: "/ziele/gesunde-schwangerschaft", destination: "/gruppenkurse", permanent: true },

      // English pages → German equivalents
      { source: "/en/home", destination: "/", permanent: true },
      { source: "/en/contact", destination: "/kontakt", permanent: true },
      { source: "/en/about-us", destination: "/ueber-uns", permanent: true },
      { source: "/en/team-2", destination: "/ueber-uns", permanent: true },
      { source: "/en/pricing", destination: "/preise", permanent: true },
      { source: "/en/gallery", destination: "/ueber-uns", permanent: true },
      { source: "/en/goals", destination: "/personal-training", permanent: true },
      { source: "/en/analyzes", destination: "/analysen", permanent: true },
      { source: "/en/trainings-coachings", destination: "/personal-training", permanent: true },
      { source: "/en/massages", destination: "/kontakt", permanent: true },
      { source: "/en/blog-en", destination: "/", permanent: true },
      { source: "/en/en-blog-archive", destination: "/", permanent: true },
      { source: "/en/news-en", destination: "/", permanent: true },
      { source: "/en/impressum-3", destination: "/impressum", permanent: true },
      { source: "/en/data-privacy", destination: "/datenschutz", permanent: true },
      { source: "/en/personal-training/:slug*", destination: "/personal-training", permanent: true },
      { source: "/en/analysen/:slug*", destination: "/analysen", permanent: true },
      { source: "/en/ziele/:slug*", destination: "/personal-training", permanent: true },

      // Blog post
      { source: "/was-bedeutet-resilienz-und-was-hat-sie-fur-einen-trainingserfolg", destination: "/", permanent: true },
      { source: "/was-bedeutet-resilienz-und-was-hat-sie-fuer-einen-einfluss-auf-deinen-trainingserfolg", destination: "/", permanent: true },

      // Catch-all for any remaining /en/ pages
      { source: "/en", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
