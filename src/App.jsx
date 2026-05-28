import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  Languages,
  Mail,
  Shield,
  Video,
  Route,
  Gift,
  FileCheck2,
} from "lucide-react";

const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdRHet2DIixzCF_7nstTwvkdoc1z6xEQ7PZy4VWk0RrpSJlNg/formResponse";
const ISRAEL_PAYMENT_URL_HE = "https://www.jgive.com/new/he/ils/charity-organizations/4717";
const ISRAEL_PAYMENT_URL_EN = "https://www.jgive.com/new/en/ils/charity-organizations/4717";
const USA_PAYMENT_URL = "PASTE_US_501C3_TAX_DEDUCTIBLE_PAYMENT_LINK_HERE";

const HERO_IMAGE = "/images/shomron-hero.jpeg";
const HILLS_IMAGE = "/images/shomron-hills.jpeg";
const VILLAGE_IMAGE = "/images/shomron-village-sunset.jpeg";
const COMMUNITY_IMAGE = "/images/shomron-new-community.jpeg";
const HAR_BRACHA_IMAGE = "/images/har-bracha-view.jpg";

const data = {
  he: {
    dir: "rtl",
    switchLabel: "English",
    badge: "Shomron Legacy Builders — קהילת שותפים שבונה את עתיד השומרון",
    heroTitle: "הזדמנות היסטורית להיות שותפים בבניין השומרון.",
    heroText:
      "הצטרפו כשותפים חודשיים לקהילה בינלאומית שמחברת ידידי ישראל למשפחות, יישובים ופרויקטים בשטח — כדי לבנות נוכחות, חיים, ביטחון ועתיד בלב הארץ.",
    primaryCta: "הצטרף כשותף חודשי",
    secondaryCta: "קבל פרטים נוספים",
    floatingGoalKicker: "יעד ראשוני",
    floatingGoalTitle: "250 שותפים ראשונים!",
    floatingGoalText: "היו מהראשונים להצטרף לקהילה שבונה את עתיד השומרון.",
    floatingGoalNote: "כל שותף מקרב אותנו ליעד.",
    floatingGoalCta: "הצטרף עכשיו",
    heroCardKicker: "המסר שלנו",
    heroCardTitle: "השומרון לא נבנה מקמפיין אחד. הוא נבנה משותפות מתמשכת.",
    heroCardText:
      "כששותפים רבים מצטרפים בהוראת קבע חודשית — כל אחד לפי יכולתו — נוצרת תשתית קבועה שמאפשרת לבנות, לחזק ולהשפיע לאורך זמן.",
    monthlyFrom: "החל מ־",
    monthlyLabel: "שותפות חודשית",
    whyKicker: "למה זה שונה?",
    whyTitle: "לא עוד קמפיין חד־פעמי. קהילה של שותפים חודשיים.",
    whyText:
      "בכל יום עולים קמפיינים חדשים. רובם מבקשים עזרה לרגע. Shomron Legacy Builders נבנה כדי ליצור חיבור עמוק ומתמשך לשומרון: קהילה של אנשים שבוחרים לקחת חלק בכל חודש בבניין משפחות, קהילות, ביטחון וחיים.",
    whyTagline: "הרבה שותפים. שליחות אחת. השפעה אמיתית.",
    monthlyKicker: "שותפות חודשית",
    monthlyTitle: "בחר את רמת השותפות שלך",
    monthlyText:
      "לא כל שותף צריך לממן פרויקט שלם. כשאנשים רבים מצטרפים יחד בהוראת קבע חודשית, גם השתתפות קבועה ונגישה הופכת לכוח גדול בשטח.",
    popular: "מומלץ",
    monthlyCta: "הצטרף עכשיו",
    benefitsKicker: "מה מקבלים המצטרפים?",
    benefitsTitle: "הצטרפות ל־SLB היא כניסה לקהילה עם חיבור חי לשומרון.",
    benefitsText:
      "המצטרפים מקבלים עדכונים, גישה, חוויות ותחושת שייכות לקהילה בינלאומית שבונה את השומרון לאורך זמן.",
taxShortText:
  "ההצטרפות מתבצעת דרך JGive וקרן שומרון, עם אפשרות לקבלת קבלה לפי סעיף 46 בישראל. לתורמים בארה״ב ניתן יהיה להצטרף גם דרך מסלול 501(c)(3) לקבלת U.S. tax-deductible receipt, בכפוף לזכאות ולכללי המס.",
    finalKicker: "הצעד הבא",
    finalTitle: "רוצה להצטרף או לשמוע עוד?",
    finalText:
      "השאר פרטים ונחזור אליך עם אפשרות ההצטרפות המתאימה לך — בישראל, בארה״ב או דרך שיחה אישית.",
    formTitle: "השאר פרטים",
    formSubtitle: "נחזור אליך עם פרטים על הצטרפות כשותף חודשי ל־SLB.",
    name: "שם מלא",
    phone: "טלפון",
    email: "אימייל",
    city: "עיר",
    country: "מדינה",
    submitting: "שולח...",
    success: "תודה! הפרטים נשלחו בהצלחה. נחזור אליך בקרוב.",
    error: "משהו השתבש בשליחה. נסה שוב או פנה אלינו ישירות במייל.",
  },
  en: {
    dir: "ltr",
    switchLabel: "עברית",
    badge: "Shomron Legacy Builders — a community of partners building Shomron’s future",
    heroTitle: "A historic opportunity to become partners in building the Shomron.",
    heroText:
      "Join as a monthly partner in an international community connecting friends of Israel to families, communities, and projects on the ground — to build presence, life, security, and a future in the Shomron, Israel’s biblical heartland.",
    primaryCta: "Join as a monthly partner",
    secondaryCta: "Get more details",
    floatingGoalKicker: "First goal",
    floatingGoalTitle: "250 founding partners!",
    floatingGoalText: "Be among the first to join the community building the Shomron’s future.",
    floatingGoalNote: "Every partner brings us closer.",
    floatingGoalCta: "Join now",
    heroCardKicker: "Our message",
    heroCardTitle: "The Shomron is not built by one campaign. It is built through steady partnership.",
    heroCardText:
      "When many partners join through monthly giving — each according to their ability — it creates a steady foundation for long-term building, strengthening, and impact.",
    monthlyFrom: "From",
    monthlyLabel: "monthly partnership",
    whyKicker: "Why this is different",
    whyTitle: "Not another one-time campaign. A community of monthly partners.",
    whyText:
      "New campaigns appear every day. Most ask for help in the moment. Shomron Legacy Builders is built for something deeper: a lasting connection to the Shomron through a community of people who choose to take part every month in building families, communities, security, and life.",
    whyTagline: "Many partners. One mission. Real impact.",
    monthlyKicker: "Monthly partnership",
    monthlyTitle: "Choose your partnership level",
    monthlyText:
      "Not every partner needs to fund an entire project. When many people join together through monthly giving, steady and accessible participation becomes real strength on the ground.",
    popular: "Recommended",
    monthlyCta: "Join now",
    benefitsKicker: "Member benefits",
    benefitsTitle: "Joining SLB means entering a community with a living connection to the Shomron.",
    benefitsText:
      "Members receive updates, access, experiences, and a sense of belonging to an international community building the Shomron over time.",
    taxShortText:
      "Joining through JGive provides an Israeli Section 46 receipt. U.S. donors will also be able to join through a 501(c)(3) route for a U.S. tax-deductible receipt, subject to eligibility and applicable tax rules.",
    finalKicker: "The next step",
    finalTitle: "Want to join or learn more?",
    finalText:
      "Leave your details and we will follow up with the right monthly partnership option — in Israel, in the U.S., or through a personal conversation.",
    formTitle: "Leave your details",
    formSubtitle: "We will follow up with details about joining SLB as a monthly partner.",
    name: "Full name",
    phone: "Phone",
    email: "Email",
    city: "City",
    country: "Country",
    submitting: "Submitting...",
    success: "Thank you! Your details were submitted successfully. We will be in touch soon.",
    error: "Something went wrong. Please try again or contact us directly by email.",
  },
};

const plans = {
  he: [
    {
      name: "Builder",
      label: "בונה השומרון",
      main: "כ־₪200",
      sub: "$72",
      featured: false,
      perks: ["עדכונים מהשטח", "הזמנה לעדכוני Zoom חודשיים", "תעודת בונה מורשת השומרון דיגיטלית"],
    },
    {
      name: "Community Partner",
      label: "שותף קהילה",
      main: "כ־₪250",
      sub: "$90",
      featured: true,
      perks: ["כל הטבות Builder", "עדכונים מורחבים מהשטח", "קדימות בהרשמה לסיורי SLB", "הזמנות לאירועים נבחרים בשומרון"],
    },
    {
      name: "Legacy Partner",
      label: "שותף מורשת",
      main: "כ־₪500",
      sub: "$180",
      featured: false,
      perks: ["כל הטבות Community Partner", "מרצ׳נדייז אקסקלוסיבי", "הזמנה לסיור VIP בשומרון", "תעודת הוקרה מודפסת", "אפשרות לשיחת עדכון אישית תקופתית"],
    },
  ],
  en: [
    {
      name: "Builder",
      label: "Shomron Builder",
      main: "$72",
      sub: "approx. ₪200",
      featured: false,
      perks: ["Field updates", "Invitation to monthly Zoom briefings", "Digital Shomron Legacy Builder certificate"],
    },
    {
      name: "Community Partner",
      label: "Community Partner",
      main: "$90",
      sub: "approx. ₪250",
      featured: true,
      perks: ["All Builder benefits", "Expanded field updates", "Priority registration for SLB tours", "Invitations to selected events in the Shomron"],
    },
    {
      name: "Legacy Partner",
      label: "Legacy Partner",
      main: "$180",
      sub: "approx. ₪500",
      featured: false,
      perks: ["All Community Partner benefits", "Exclusive merchandise", "Invitation to a VIP tour in the Shomron", "Printed recognition certificate", "Option for a periodic personal update call"],
    },
  ],
};

const benefits = {
  he: [
    [Video, "עדכוני Zoom חודשיים", "מפגשים חודשיים עם מומחים, אנשי שטח, מנהיגי קהילות ודמויות מהשומרון."],
    [Shield, "עדכונים מהשטח", "סרטונים, תמונות וסיפורים קצרים מהפרויקטים, המשפחות והיישובים."],
    [Route, "סיורים ואירועים", "הזמנות לסיורים, אירועים וחוויות קהילתיות בשומרון."],
    [Gift, "מרצ׳נדייז אקסקלוסיבי", "פריטי SLB ייחודיים לפי רמת השותפות."],
    [FileCheck2, "תעודת בונה מורשת השומרון", "תעודת הוקרה לשותפים שלוקחים חלק בבניין העתיד של השומרון."],
  ],
  en: [
    [Video, "Monthly Zoom briefings", "Monthly sessions with experts, field leaders, community representatives, and voices from the Shomron."],
    [Shield, "Field updates", "Videos, photos, and short stories from projects, families, and communities."],
    [Route, "Tours and events", "Invitations to tours, events, and community experiences in the Shomron."],
    [Gift, "Exclusive merchandise", "Unique SLB items according to partnership level."],
    [FileCheck2, "Shomron Legacy Builder certificate", "A recognition certificate for partners taking part in building the Shomron’s future."],
  ],
};

function Button({ children, href, variant = "primary", type = "button", disabled = false, onClick }) {
  const base = "inline-flex items-center justify-center rounded-2xl px-6 py-4 text-base font-semibold transition disabled:opacity-70";
  const styles = {
    primary: "bg-[#C8A24A] text-[#0B1320] shadow-lg shadow-black/10 hover:bg-[#D8B85F]",
    dark: "bg-[#0B1320] text-white hover:bg-[#111C2D]",
    green: "bg-[#4F6F45] text-white hover:bg-[#344D32]",
    outlineLight: "border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20",
    outlineDark: "border border-[#D8C9A8] bg-white text-[#0B1320] hover:bg-[#FBF8F1]",
  };

  if (href) {
  const isInternalLink = href.startsWith("#");

  return (
    <a
      className={`${base} ${styles[variant]}`}
      href={href}
      target={isInternalLink ? undefined : "_blank"}
      rel={isInternalLink ? undefined : "noreferrer"}
    >
      {children}
    </a>
  );
}

  return (
    <button className={`${base} ${styles[variant]}`} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-3xl border border-[#E4D8BC] bg-white shadow-sm shadow-slate-900/5 ${className}`}>{children}</div>;
}

function Heading({ kicker, title, text, light = false }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className={`text-sm font-semibold uppercase tracking-[0.25em] ${light ? "text-[#E9D9A8]" : "text-[#4F6F45]"}`}>{kicker}</p>
      <h2 className={`mt-3 text-3xl font-bold tracking-tight md:text-5xl ${light ? "text-white" : "text-[#0B1320]"}`}>{title}</h2>
      {text && <p className={`mt-5 text-lg leading-8 ${light ? "text-slate-300" : "text-slate-600"}`}>{text}</p>}
    </div>
  );
}

function TextInput({ label, value, onChange, type = "text", required = false }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        className="w-full rounded-2xl border border-[#E4D8BC] px-4 py-4 text-[#0B1320] outline-none transition focus:border-[#C8A24A] focus:ring-4 focus:ring-[#E9D9A8]/60"
      />
    </div>
  );
}

export default function LandingPage() {
  const [language, setLanguage] = useState("he");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", city: "", country: "" });
  const [formStatus, setFormStatus] = useState("idle");
  const [showGoalCard, setShowGoalCard] = useState(false);

  const t = data[language];
  const isHebrew = language === "he";
  const DirectionArrow = isHebrew ? ArrowLeft : ArrowRight;
  const textAlign = isHebrew ? "text-right" : "text-left";
  const heroGradient = isHebrew
    ? "bg-gradient-to-l from-[#0B1320]/85 via-[#0B1320]/55 to-[#0B1320]/20"
    : "bg-gradient-to-r from-[#0B1320]/85 via-[#0B1320]/55 to-[#0B1320]/20";

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowGoalCard(true);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, []);

  const updateField = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

 const handleSubmit = async (event) => {
  event.preventDefault();
  setFormStatus("submitting");

  try {
    const formPayload = new FormData();

    formPayload.append("entry.865479936", formData.name);
    formPayload.append("entry.1319197575", formData.phone);
    formPayload.append("entry.1845781737", formData.email);
    formPayload.append("entry.37940007", formData.city);
    formPayload.append("entry.185221955", formData.country);
    formPayload.append("entry.399668613", language);
    formPayload.append("entry.2092957137", "SLB Landing Page");

    await fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      mode: "no-cors",
      body: formPayload,
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      city: "",
      country: "",
    });

    setFormStatus("success");
  } catch (error) {
    setFormStatus("error");
  }
};

  return (
    <main dir={t.dir} className={`min-h-screen bg-[#FBF8F1] text-[#0B1320] ${textAlign}`}>
      <section className="relative overflow-hidden bg-[#0B1320] text-white">
        <img
  src={HERO_IMAGE}
  alt=""
  className="absolute inset-0 h-full w-full object-cover opacity-70"
/>
<div className="absolute inset-0 bg-gradient-to-l from-[#0B1320]/90 via-[#0B1320]/55 to-[#0B1320]/20" />
<div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/75 via-transparent to-[#0B1320]/10" />

        <div className="absolute left-6 top-6 z-20 md:left-10 md:top-8">
          <Button variant="outlineLight" onClick={() => setLanguage(isHebrew ? "en" : "he")}>
            <Languages className="h-4 w-4" />
            <span className="mx-2">{t.switchLabel}</span>
          </Button>
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:px-10 lg:py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-8">
            <div className="flex items-center gap-4">
  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#FBF8F1] p-2 shadow-xl ring-1 ring-[#E9D9A8] md:h-28 md:w-28">
    <img
      src="/images/slb-logo.png"
      alt="Shomron Legacy Builders"
      className="h-full w-full rounded-full object-contain"
    />
  </div>
  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-[#E9D9A8] backdrop-blur">
    <HeartHandshake className="h-4 w-4" />
    {t.badge}
  </div>
</div>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">{t.heroTitle}</h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">{t.heroText}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="primary" href={isHebrew ? ISRAEL_PAYMENT_URL_HE : ISRAEL_PAYMENT_URL_EN}>
                {t.primaryCta}
                <DirectionArrow className="mx-2 h-5 w-5" />
              </Button>
              <Button variant="outlineLight" href="#contact-form">{t.secondaryCta}</Button>
            </div>
          </motion.div>

          <Card className="border-white/10 bg-white/10 text-white shadow-2xl backdrop-blur">
            <div className="space-y-8 p-8">
              <div className="rounded-3xl bg-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-[#E9D9A8]">{t.heroCardKicker}</p>
                <h2 className="mt-3 text-3xl font-bold">{t.heroCardTitle}</h2>
                <p className="mt-4 leading-7 text-slate-200">{t.heroCardText}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl bg-[#FBF8F1] p-5 text-[#0B1320]">
                  <p className="text-sm font-semibold text-slate-600">{t.monthlyFrom}</p>
                  <p className="text-3xl font-bold">{isHebrew ? "כ־₪200" : "$72+"}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">{isHebrew ? "$72+" : "approx. ₪200"}</p>
                </div>
                <div className="rounded-3xl bg-[#C8A24A] p-5 text-[#0B1320]">
                  <p className="text-3xl font-bold">SLB</p>
                  <p className="mt-1 text-sm text-[#344D32]">{t.monthlyLabel}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-18 md:px-10 md:py-20">
        <img
          src={VILLAGE_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-[#FBF8F1]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBF8F1]/70 via-[#FBF8F1]/25 to-[#FBF8F1]/72" />
        <div className="relative mx-auto max-w-7xl">
          <Heading kicker={t.whyKicker} title={t.whyTitle} text={t.whyText} />
          <div className="mx-auto mt-8 w-fit rounded-2xl bg-white/90 px-6 py-4 text-center text-lg font-bold text-[#344D32] shadow-lg ring-1 ring-[#E9D9A8] backdrop-blur-md">
            {t.whyTagline}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-18 md:px-10 md:py-20">
        <img
src={HAR_BRACHA_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-[#F4EFE6]/38" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4EFE6]/62 via-[#F4EFE6]/15 to-[#F4EFE6]/65" />
        <div className="relative mx-auto max-w-7xl">
          <Heading kicker={t.benefitsKicker} title={t.benefitsTitle} text={t.benefitsText} />
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {benefits[language].map(([Icon, title, text]) => (
              <Card key={title} className="bg-white/92 backdrop-blur-sm">
                <div className="p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E9D9A8]/55 text-[#344D32]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#0B1320]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FBF8F1] px-6 py-18 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Heading kicker={t.monthlyKicker} title={t.monthlyTitle} text={t.monthlyText} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {plans[language].map((plan) => (
              <Card key={plan.name} className={`relative bg-white transition hover:-translate-y-1 hover:shadow-xl ${plan.featured ? "ring-2 ring-[#C8A24A]" : ""}`}>
                {plan.featured && <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#C8A24A] px-5 py-2 text-sm font-bold text-[#0B1320] shadow-lg">{t.popular}</div>}
                <div className="flex h-full flex-col p-7">
                  <h3 className="text-2xl font-bold text-[#0B1320]">{plan.name}</h3>
                  <p className="mt-1 text-lg font-semibold text-[#4F6F45]">{plan.label}</p>
                  <div className="mt-6">
                    <div className="flex items-end gap-3">
                      <span className="text-5xl font-bold tracking-tight text-[#0B1320]">{plan.main}</span>
                      <span className="pb-2 text-slate-500">/ {isHebrew ? "לחודש" : "month"}</span>
                    </div>
                    <p className="mt-2 text-lg font-semibold text-[#344D32]">{plan.sub} / {isHebrew ? "לחודש" : "month"}</p>
                  </div>
                  <div className="mt-6 flex-1 space-y-3">
                    {plan.perks.map((perk) => (
                      <div key={perk} className="flex gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#4F6F45]" />
                        <p className="text-sm font-medium leading-6 text-slate-700">{perk}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="dark" href={isHebrew ? ISRAEL_PAYMENT_URL_HE : ISRAEL_PAYMENT_URL_EN}>
                    {t.monthlyCta}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
      <div className="mx-auto mt-8 max-w-4xl rounded-2xl bg-[#F4EFE6] p-5 text-center text-sm font-medium leading-7 text-[#344D32] ring-1 ring-[#E9D9A8]">
  {t.taxShortText}
</div>
           
        </div>
      </section>

      <section id="contact-form" className="relative overflow-hidden bg-[#0B1320] px-6 py-18 text-white md:px-10 md:py-20">
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-[#0B1320]/64" />
        <div className="relative mx-auto max-w-7xl">
          <Heading kicker={t.finalKicker} title={t.finalTitle} text={t.finalText} light />
          <div className="mx-auto mt-10 max-w-2xl rounded-[2rem] bg-white p-6 text-[#0B1320] shadow-2xl md:p-8">
            <h3 className="text-2xl font-bold">{t.formTitle}</h3>
            <p className="mt-2 text-slate-600">{t.formSubtitle}</p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <TextInput label={t.name} value={formData.name} onChange={(value) => updateField("name", value)} required />
              <div className="grid gap-4 sm:grid-cols-2">
                <TextInput label={t.phone} value={formData.phone} onChange={(value) => updateField("phone", value)} required />
                <TextInput label={t.email} type="email" value={formData.email} onChange={(value) => updateField("email", value)} required />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <TextInput label={t.city} value={formData.city} onChange={(value) => updateField("city", value)} />
                <TextInput label={t.country} value={formData.country} onChange={(value) => updateField("country", value)} />
              </div>
              <div className="flex items-center gap-3 pt-2 text-sm text-slate-500">
                <Mail className="h-4 w-4 text-[#4F6F45]" />
                <span>shmuelberzon@gmail.com</span>
              </div>
              {formStatus === "success" && <div className="rounded-2xl bg-[#F4EFE6] p-4 text-sm font-semibold text-[#344D32] ring-1 ring-[#E9D9A8]">{t.success}</div>}
              {formStatus === "error" && <div className="rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-700 ring-1 ring-red-100">{t.error}</div>}
              <Button type="submit" variant="green" disabled={formStatus === "submitting"}>
                {formStatus === "submitting" ? t.submitting : t.primaryCta}
              </Button>
            </form>
          </div>
        </div>
      </section>
      {showGoalCard && (
        <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-sm rounded-[1.6rem] border border-[#E9D9A8]/70 bg-[#0B1320]/95 p-4 text-white shadow-2xl shadow-black/25 backdrop-blur md:left-6 md:right-auto md:mx-0 md:max-w-xs">
          <button
            type="button"
            onClick={() => setShowGoalCard(false)}
            className={`absolute top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-sm text-white/75 transition hover:bg-white/20 hover:text-white ${isHebrew ? "left-4" : "right-4"}`}
            aria-label={isHebrew ? "סגור" : "Close"}
          >
            ×
          </button>
          <div className="pr-0 md:pr-2">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#E9D9A8]">{t.floatingGoalKicker}</p>
            <p className="mt-2 text-2xl font-black tracking-tight text-[#C8A24A]">{t.floatingGoalTitle}</p>
            <p className="mt-2 text-sm leading-6 text-white/85">{t.floatingGoalText}</p>
            <p className="mt-2 text-xs font-semibold text-[#E9D9A8]">{t.floatingGoalNote}</p>
            <a
              href={isHebrew ? ISRAEL_PAYMENT_URL_HE : ISRAEL_PAYMENT_URL_EN}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-[#C8A24A] px-4 py-3 text-sm font-bold text-[#0B1320] transition hover:bg-[#D8B85F]"
            >
              {t.floatingGoalCta}
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
