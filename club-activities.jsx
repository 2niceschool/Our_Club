import { useState, useEffect } from "react";

const RED = "#E8001C";
const RED2 = "#C0001A";
const LIGHT_RED = "#FFF0F2";

function useCountdown() {
  const calc = () => {
    const now = new Date();
    const target = new Date("2026-06-15T09:00:00");
    const diff = target - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const t = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(t);
  }, []);
  return time;
}

function OpenDayBanner() {
  const { days, hours, minutes } = useCountdown();
  const units = [
    { val: days, label: "يوم" },
    { val: hours, label: "ساعة" },
    { val: minutes, label: "دقيقة" },
  ];
  return (
    <div style={{
      background: `linear-gradient(135deg, ${RED2} 0%, ${RED} 60%, #FF4D60 100%)`,
      padding: "52px 24px 44px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative white circles */}
      {[
        { top: -80, right: -80, size: 240 },
        { bottom: -60, left: -60, size: 200 },
        { top: 20, left: "38%", size: 100 },
      ].map((c, i) => (
        <div key={i} style={{
          position: "absolute", top: c.top, bottom: c.bottom, right: c.right, left: c.left,
          width: c.size, height: c.size, background: "#fff", borderRadius: "50%",
          opacity: 0.07, pointerEvents: "none",
        }} />
      ))}

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.3)", borderRadius: "50px",
          padding: "7px 22px", fontSize: "0.82rem", fontWeight: "700",
          color: "#fff", marginBottom: "20px",
        }}>
          🎉 يوم مفتوح مجاني
        </div>

        <h2 style={{ color: "#fff", fontSize: "clamp(2rem,6vw,3rem)", fontWeight: "900", margin: "0 0 8px", lineHeight: 1.1 }}>
          15 جـــــــوان 2026 على 09:00
        </h2>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", margin: "0 0 36px", fontWeight: "500" }}>
          تعالوا اكتشفوا كل أنشطة نادي 2Nice School — الدخول مجاني 🎊
        </p>

        {/* Countdown
        <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap", marginBottom: "32px" }}>
          {units.map((u, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.15)", backdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.25)", borderRadius: "20px",
              padding: "20px 26px", minWidth: "86px",
            }}>
              <div style={{
                fontSize: "clamp(2.4rem,5vw,3.2rem)", fontWeight: "900", color: "#fff",
                lineHeight: 1, fontVariantNumeric: "tabular-nums", letterSpacing: "-1px",
              }}>
                {String(u.val).padStart(2, "0")}
              </div>
              <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.8)", marginTop: "8px", fontWeight: "700" }}>
                {u.label}
              </div>
            </div>
          ))}
        
        
        </div>
        */}



      </div>



    </div>
  );
}

const categories = [
  {
    id: "sport", label: "الرياضة", emoji: "⚽", color: RED, light: LIGHT_RED,
    juniors: [
      { name: "كرة القدم", icon: "⚽", detail: "تدريب أسبوعي + بطولات داخلية" },
      { name: "السباحة", icon: "🏊", detail: "حصص تعليمية وترفيهية" },
      { name: "ألعاب جماعية", icon: "🏐", detail: "العاب الذكاء، بينج بونج، ألعاب حركية" },
      { name: "رحلة رياضية", icon: "🏕️", detail: "خروجة فصلية في الطبيعة" },
    ],
    seniors: [
      { name: "اللياقة البدنية", icon: "💪", detail: "برنامج مخصص مع مدرب" },
      { name: "كرة القدم 5×5", icon: "🥅", detail: "دوري أسبوعي بين الأعضاء" },
      { name: "الهايكينج", icon: "🥾", detail: "خروجة شهرية في الطبيعة" },
      { name: "رياضات المغامرة", icon: "🧗", detail: "تسلق، قفز، رياضات خارجية" },
    ],
  },
  {
    id: "creative", label: "الإبداع", emoji: "🎨", color: "#FF6B00", light: "#FFF4EC",
    juniors: [
      { name: "رسم وتلوين", icon: "🖌️", detail: "ورش فن أسبوعية بمواضيع مختلفة" },
      { name: "الصناعة اليدوية", icon: "✂️", detail: "كرافت، أوريغامي، ديكور" },
      { name: "تصوير للمبتدئين", icon: "📸", detail: "أساسيات التصوير بالهاتف" },
      { name: "مسرح الأطفال", icon: "🎭", detail: "تمثيل وعروض أمام العائلة" },
    ],
    seniors: [
      { name: "التصوير الاحترافي", icon: "📷", detail: "تقنيات متقدمة وتحرير الصور" },
      { name: "الموسيقى", icon: "🎵", detail: "دروس عزف وجلسات موسيقية" },
      { name: "الكتابة الإبداعية", icon: "✍️", detail: "قصص، مقالات، محتوى رقمي" },
      { name: "تصميم جرافيك", icon: "🖥️", detail: "Canva و Figma للمبتدئين" },
    ],
  },
  {
    id: "knowledge", label: "المعرفة", emoji: "📚", color: "#0077CC", light: "#EAF4FF",
    juniors: [
      { name: "نادي القراءة", icon: "📖", detail: "كتاب شهري + نقاش ممتع" },
      { name: "العلوم والتجارب", icon: "🔬", detail: "تجارب علمية بسيطة وممتعة" },
      { name: "لغات للأطفال", icon: "🌍", detail: "إنجليزية وفرنسية بطريقة اللعب" },
      { name: "القيم والأخلاق", icon: "☀️", detail: "قصص تربوية وحفظ القرآن" },
    ],
    seniors: [
      { name: "ريادة الأعمال", icon: "💡", detail: "فكرة ← مشروع ← إطلاق" },
      { name: "البرمجة و تقنيات الاعلام الالي", icon: "💻", detail: "Informatique ، مواقع و تطبيقات ، ذكاء اصطناعي" },
      { name: "محاضرات ضيوف", icon: "🎙️", detail: "متحدثون متخصصون كل شهر" },
      { name: "نادي الكتاب", icon: "📚", detail: "قراءة تحليلية ونقاش فكري" },
    ],
  },
  {
    id: "languages", label: "اللغات", emoji: "🗣️", color: "#6D28D9", light: "#F5F0FF",
    juniors: [
      { name: "الفرنسية", icon: "🇫🇷", detail: "تعلم ممتع للغة الفرنسية باللعب" },
      { name: "الإنجليزية", icon: "🇬🇧", detail: "محادثات بسيطة وألعاب لغوية" },
      { name: "العربية المتقدمة", icon: "🌙", detail: "خط العربي الاصيل ، قراءة وتعبير شفهي" },
      { name: "الإسبانية للمبتدئين", icon: "🇪🇸", detail: "أغاني وحوارات للأطفال" },
    ],
    seniors: [
      { name: "الفرنسية المتقدمة", icon: "🇫🇷", detail: "تعبير كتابي، شفهي وثقافة فرنسية" },
      { name: "الإنجليزية المهنية", icon: "🇬🇧", detail: "Business English وعروض تقديمية" },
      { name: "التـــــركية", icon: "🇹🇷", detail: "Hiragana وأساسيات المحادثة" },
      { name: "ورشة متعددة اللغات", icon: "🌐", detail: "تبادل لغوي بين الأعضاء" },
    ],
  },
  {
    id: "social", label: "الاجتماعي", emoji: "🤝", color: "#059669", light: "#ECFDF5",
    juniors: [
      { name: "يوم المواهب", icon: "⭐", detail: "كل طفل يعرض موهبته المميزة" },
      { name: "التبادل الثقافي", icon: "🌐", detail: "اكتشاف ثقافات مختلفة من العالم" },
      { name: "العمل التطوعي", icon: "❤️", detail: "أعمال تضامنية وزيارات خيرية" },
      { name: "الاحتفالات والمناسبات", icon: "🎉", detail: "أعياد ميلاد ومناسبات وطنية" },
    ],
    seniors: [
      { name: "التواصل المهني", icon: "🤝", detail: "لقاءات وبناء علاقات مهنية" },
      { name: "التطوع المجتمعي", icon: "🌱", detail: "مبادرات في الحي والمدينة" },
      { name: "الرحلات الجماعية", icon: "✈️", detail: "خروجات شهرية محلية وإقليمية" },
      { name: "المسابقات والبطولات", icon: "🏆", detail: "تحديات بين الأعضاء مع جوائز" },
    ],
  },
];

const outings = [
  { icon: "🏖️", title: "رحلة شاطئ", freq: "فصلية", who: "الفئتان", color: "#0077CC" },
  { icon: "🏟️", title: "مباراة رياضية", freq: "شهرية", who: "كبار", color: RED },
  { icon: "🎠", title: "مدينة ألعاب", freq: "شهرية", who: "صغار", color: RED },
  { icon: "🎬", title: "سينما جماعية", freq: "شهرية", who: "الفئتان", color: "#6D28D9" },
  { icon: "🍕", title: "غداء جماعي", freq: "شهرية", who: "الفئتان", color: "#FF6B00" },
];

const stats = [
  { num: "+20", label: "نشاط" },
  { num: "8+", label: "خروجة" },
  { num: "5", label: "محور" },
  { num: "2", label: "فئة" },
];

export default function App() {
  const [active, setActive] = useState("sport");
  const [filter, setFilter] = useState("juniors");
  const cat = categories.find((c) => c.id === active);

  return (
    <div dir="rtl" style={{ background: "#F8F8F8", minHeight: "100vh", fontFamily: "'Cairo', sans-serif", color: "#111" }}>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet" />

      <OpenDayBanner />

      {/* HEADER with Logo */}
      <div style={{
        background: "#fff",
        borderBottom: `3px solid ${RED}`,
        padding: "0 24px",
      }}>
        <div style={{
          maxWidth: "940px", margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "20px 0", gap: "20px", flexWrap: "wrap",
        }}>
          {/* Logo placeholder */}
          <div style={{
            width: "80px", height: "78px",
            border: `2px dashed ${RED}`,
            borderRadius: "16px",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            background: LIGHT_RED, flexShrink: 0, cursor: "pointer",
            transition: "all 0.2s",
          }}
          >
            <img src="public/2_Nice_logo.png" alt="logo" style={{ width: "100%", height: "100%" }} />
          </div>

          {/* Title */}
          <div style={{ flex: 1, textAlign: "center" }}>
            <h1 style={{ fontSize: "clamp(1.4rem,4vw,2.2rem)", fontWeight: "900", margin: "0 0 4px", color: "#111" }}>
              الفعاليات والخروجات
            </h1>
            <p style={{ color: "#999", fontSize: "0.85rem", margin: 0 }}>
              اختر الفئة وتصفح جميع الأنشطة المتاحة
            </p>
          </div>

          {/* Badge */}
          <div style={{
            background: RED, color: "#fff",
            fontSize: "11px", fontWeight: "700", letterSpacing: "2px",
            padding: "6px 16px", borderRadius: "20px", flexShrink: 0,
          }}>
            النادي
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{ background: "#111", padding: "16px 24px", display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
        {stats.map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.9rem", fontWeight: "900", color: RED, lineHeight: 1 }}>{s.num}</div>
            <div style={{ fontSize: "0.72rem", color: "#aaa", marginTop: "4px" }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: "940px", margin: "0 auto", padding: "28px 18px 60px" }}>

        {/* Age Filter */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "28px" }}>
          {[
            { key: "juniors", label: "🌱 الصغار", sub: "أقل من 15 سنة" },
            { key: "seniors", label: "🚀 الكبار", sub: "16 سنة فأكثر" },
          ].map((f) => (
            <button key={f.key} onClick={() => setFilter(f.key)} style={{
              background: filter === f.key ? RED : "#fff",
              color: filter === f.key ? "#fff" : "#777",
              border: filter === f.key ? `2px solid ${RED}` : "2px solid #e0e0e0",
              borderRadius: "14px", padding: "11px 28px",
              cursor: "pointer", fontFamily: "Cairo, sans-serif", fontWeight: "700", fontSize: "1rem",
              transition: "all 0.2s",
              boxShadow: filter === f.key ? `0 4px 16px ${RED}33` : "none",
            }}>
              {f.label}
              <div style={{ fontSize: "0.7rem", opacity: 0.6, marginTop: "2px", fontWeight: "400" }}>{f.sub}</div>
            </button>
          ))}
        </div>

        {/* Category Tabs */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center", marginBottom: "24px" }}>
          {categories.map((c) => (
            <button key={c.id} onClick={() => setActive(c.id)} style={{
              background: active === c.id ? c.color : "#fff",
              color: active === c.id ? "#fff" : "#555",
              border: `2px solid ${active === c.id ? c.color : "#e5e5e5"}`,
              borderRadius: "50px", padding: "9px 22px",
              cursor: "pointer", fontFamily: "Cairo, sans-serif", fontWeight: "700", fontSize: "0.9rem",
              transition: "all 0.2s", display: "flex", alignItems: "center", gap: "6px",
              boxShadow: active === c.id ? `0 4px 14px ${c.color}40` : "none",
            }}>
              <span>{c.emoji}</span> {c.label}
            </button>
          ))}
        </div>

        {/* Activities */}
        <div style={{
          background: "#fff", borderRadius: "22px", padding: "28px", marginBottom: "28px",
          border: `2px solid ${cat.color}33`, boxShadow: `0 6px 32px ${cat.color}12`,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "24px", paddingBottom: "16px", borderBottom: `2px solid ${cat.light}` }}>
            <div style={{ width: "52px", height: "52px", background: cat.light, borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.7rem" }}>
              {cat.emoji}
            </div>
            <div>
              <div style={{ fontWeight: "900", fontSize: "1.2rem", color: cat.color }}>{cat.label}</div>
              <div style={{ color: "#aaa", fontSize: "0.8rem" }}>{filter === "juniors" ? "فئة الصغار" : "فئة الكبار"}</div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(185px, 1fr))", gap: "12px" }}>
            {cat[filter].map((act, i) => (
              <div key={i}
                style={{ background: cat.light, border: "2px solid transparent", borderRadius: "16px", padding: "20px 16px", transition: "all 0.2s", cursor: "default" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = cat.color; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 8px 20px ${cat.color}22`; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "transparent"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{act.icon}</div>
                <div style={{ fontWeight: "800", fontSize: "0.95rem", color: "#111", marginBottom: "7px" }}>{act.name}</div>
                <div style={{ color: "#888", fontSize: "0.8rem", lineHeight: "1.5" }}>{act.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Outings */}
        <div style={{ marginBottom: "28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
            <div style={{ width: "4px", height: "30px", background: `linear-gradient(180deg,${RED},#FF8C00)`, borderRadius: "4px" }} />
            <div>
              <div style={{ fontWeight: "900", fontSize: "1.2rem" }}>الخروجات والرحلات</div>
              <div style={{ color: "#aaa", fontSize: "0.78rem" }}>مصنّفة حسب الفئة والتكرار</div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(155px, 1fr))", gap: "10px" }}>
            {outings
              .filter((o) => o.who === "الفئتان" || (filter === "juniors" ? o.who === "صغار" : o.who === "كبار"))
              .map((o, i) => (
                <div key={i}
                  style={{ background: "#fff", border: "2px solid #f0f0f0", borderRadius: "16px", padding: "18px 12px", textAlign: "center", transition: "all 0.2s", cursor: "default" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = o.color; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 8px 18px ${o.color}22`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#f0f0f0"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "8px" }}>{o.icon}</div>
                  <div style={{ fontWeight: "800", fontSize: "0.88rem", color: "#111", marginBottom: "8px" }}>{o.title}</div>
                  <div style={{ background: `${o.color}18`, color: o.color, fontSize: "0.72rem", fontWeight: "700", padding: "3px 10px", borderRadius: "20px", display: "inline-block" }}>
                    {o.freq}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

function Footer() {
  const [showFB, setShowFB] = useState(false);

  return (
    <>
      {/* Title Banner */}
      <div style={{
        background: `linear-gradient(135deg, ${RED2}, ${RED})`,
        borderRadius: "22px",
        padding: "30px",
        color: "#fff",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        marginBottom: "32px"
      }}>
        <div style={{ fontSize: "1.4rem", fontWeight: "900" }}>
          نادي للنمو والتطوير معاً
        </div>
        <div style={{ opacity: 0.85, marginTop: "6px", fontSize: "0.95rem" }}>
          بيئة تعليمية متكاملة للصغار والكبار
        </div>
      </div>

      {/* Pro Contact Section */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "24px",
      }}>
        {/* Phone & Email */}
        <div style={proCardStyle}>
          <div style={proTitleStyle}>اتصل بنا</div>
          <div style={textItemStyle}><span style={{ opacity: 0.6, marginLeft: "8px", minWidth: "105px" }}>المدينة الجديدة:</span> <span dir="ltr">07-70-68-02-54</span></div>
          <div style={textItemStyle}><span style={{ opacity: 0.6, marginLeft: "8px", minWidth: "105px" }}>سيدي مبــــروك:</span> <span dir="ltr">05-42-39-07-01</span></div>
        </div>

        {/* Location */}
        <div style={proCardStyle}>
          <div style={proTitleStyle}>فروعنا</div>
          <div style={textItemStyle}><span style={{ opacity: 0.6, marginLeft: "8px" }}>الفرع 1:</span> سيدي مبروك الأعلى</div>
          <div style={textItemStyle}><span style={{ opacity: 0.6, marginLeft: "8px" }}>الفرع 2:</span> المدينة الجديدة الاستقلال</div>
          <div style={{ ...textItemStyle, marginTop: "8px", background: "#f8f9fa", padding: "8px 12px", borderRadius: "10px", border: "1px solid #eee" }}><span style={{ marginRight: "6px" }}>🕒</span> 08:00 صباحاً - 18:00 مساءً</div>
        </div>

        {/* Social Media */}

        <div style={proCardStyle}>

          <div style={proTitleStyle}>تواصل معنا</div>

          <div style={{ display: "flex", flexDirection: "row", gap: "10px", marginTop: "4px", alignItems: "center", justifyContent: "center" }}>

            <div onClick={() => window.open("https://www.facebook.com/rahmen.talhi.2nice", "_blank")} style={socialBtnStyle}>
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="facebook" width="22" height="22" />
            </div>
            <div onClick={() => window.open("https://www.instagram.com/2nice.school/?fbclid=IwY2xjawRXattleHRuA2FlbQIxMQBicmlkETFGSlNWemxLbXlVUVQ2NGNSc3J0YwZhcHBfaWQBMAABHjCmIUMxgCk8-OCbuBF05ymDjGKSe1qLYZB27g8Hxk2BmSwQ9hCvgC-PlPW2_aem_oGXGhRv1MRdSL50xDAznmw", "_blank")} style={socialBtnStyle}>
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="instagram" width="22" height="22" />

            </div>
            <div onClick={() => window.open("https://www.tiktok.com/@2nice.school?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnkcTYMDdAxbce42M6LTlb9DxGCoHKHsxWA7lFgGIoWHt3f0g_hcdTTawbv1c_aem_X1cOQ83mwOAXF8lMWOiCLw", "_blank")} style={socialBtnStyle}>
              <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="tiktok" width="22" height="22" />

            </div>

          </div>
        </div>
      </div>

    </>
  );
}

/* Pro Styles */
const proCardStyle = {
  background: "#fff",
  border: "1px solid #eaeaea",
  boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
  padding: "26px",
  borderRadius: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const iconContainerStyle = {
  width: "54px",
  height: "54px",
  background: LIGHT_RED,
  color: RED,
  borderRadius: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.7rem",
  marginBottom: "6px"
};

const proTitleStyle = {
  fontWeight: "900",
  fontSize: "1.3rem",
  marginBottom: "6px",
  color: "#111",
  letterSpacing: "-0.5px"
};

const textItemStyle = {
  fontSize: "0.95rem",
  display: "flex",
  alignItems: "center",
  fontWeight: "700",
  color: "#444"
};

const socialBtnStyle = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  background: "#f8f9fa",
  border: "1px solid #eee",
  padding: "12px 18px",
  borderRadius: "14px",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "800",
  color: "#333",
  transition: "all 0.2s ease"
};
