import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, Phone, Mail, Users } from "lucide-react";
import { ContactInquiry } from "../types";
import { useTranslation } from "react-i18next";
import { EMAIL, RATE_LIMIT_MS } from "../constants";

interface ContactFormProps {
  selectedCourseId: string;
}

export default function ContactForm({ selectedCourseId }: ContactFormProps) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "en" | "id" | "zh";

  const [formData, setFormData] = useState<ContactInquiry>({
    parentName: "",
    childName: "",
    childAge: "",
    email: "",
    phone: "",
    courseInterest: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [pastInquiries, setPastInquiries] = useState<ContactInquiry[]>([]);
  const [showInquiries, setShowInquiries] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [rateLimitError, setRateLimitError] = useState(false);

  // Sync courseInterest with selectedCourseId from parent
  useEffect(() => {
    if (selectedCourseId) {
      setFormData((prev) => ({
        ...prev,
        courseInterest: selectedCourseId,
      }));
    }
  }, [selectedCourseId]);

  // Load past inquiries from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("miss_veys_inquiries");
      if (stored) {
        setPastInquiries(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRateLimitError(false);

    // 1. Honeypot check — bots fill hidden fields
    if (honeypot) return;

    // 2. Rate limiting — prevent rapid-fire submissions
    const lastSubmit = localStorage.getItem("miss_veys_last_submit");
    if (lastSubmit) {
      const elapsed = Date.now() - Number(lastSubmit);
      if (elapsed < RATE_LIMIT_MS) {
        setRateLimitError(true);
        return;
      }
    }

    setIsSubmitting(true);

    // Save inquiry to localStorage for history
    const updatedInquiries = [formData, ...pastInquiries];
    setPastInquiries(updatedInquiries);
    try {
      localStorage.setItem(
        "miss_veys_inquiries",
        JSON.stringify(updatedInquiries),
      );
    } catch (err) {
      console.error(err);
    }

    // Open WhatsApp chat in new tab
    window.open(
      "https://wa.me/message/YHV7MSJVPRWFK1",
      "_blank",
      "noopener,noreferrer",
    );

    // Record submission timestamp for rate limiting
    localStorage.setItem("miss_veys_last_submit", String(Date.now()));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form but keep interest pre-fill potential
    setFormData({
      parentName: "",
      childName: "",
      childAge: "",
      email: "",
      phone: "",
      courseInterest: selectedCourseId || "",
      message: "",
    });
  };

  const handleResetSuccess = () => {
    setIsSuccess(false);
  };

  const renderBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-brand-cream border-b-4 border-brand-charcoal px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background doodles */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-brand-coral/10 rounded-full blur-xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-stretch">
          {/* Column Left: Visual info card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 mb-12 lg:mb-0">
            <div className="space-y-4 flex flex-col items-start">
              <span className="inline-flex items-center gap-1.5 bg-brand-yellow text-brand-charcoal px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border-2 border-brand-charcoal shadow-[2px_2px_0px_0px_rgba(45,52,54,1)]">
                {t("contact.badge")}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-brand-charcoal leading-tight">
                {t("contactForm.leftHeadline")}{" "}
                <span className="text-brand-coral">
                  {t("contactForm.leftHeadlineHighlight")}
                </span>
                ?
              </h2>
              <p className="font-sans text-base text-brand-charcoal/80 leading-relaxed">
                {t("contact.subtitle")}
              </p>
            </div>

            {/* School Contacts Info */}
            <div className="space-y-4 bg-brand-card p-6 rounded-[2rem] border-4 border-brand-charcoal shadow-neo-sm">
              <span className="font-display text-sm font-black text-brand-coral block mb-3 uppercase tracking-wider">
                <Phone className="w-4 h-4 mr-3 inline" />{" "}
                {t("contactForm.contactsTitle")}
              </span>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-teal/20 border border-brand-charcoal flex items-center justify-center shrink-0 text-brand-teal">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-sans text-xs font-bold text-brand-charcoal/50 uppercase">
                    {t("contactForm.emailText")}
                  </span>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="block font-display text-sm sm:text-base text-brand-charcoal font-black hover:text-brand-coral transition-colors">
                    {EMAIL}
                  </a>
                </div>
              </div>

              {/* WhatsApp QR Code */}
              <div className="bg-brand-charcoal border-2 border-brand-cream/20 rounded-2xl p-5 shadow-[3px_3px_0px_0px_var(--bg-app)] flex flex-col max-[420px]:items-center min-[420px]:flex-row min-[420px]:justify-between gap-5">
                <div className="flex flex-col justify-center shrink-0 max-[420px]:text-center min-[420px]:max-w-[120px] gap-1">
                  <span className="font-display text-xs font-black text-brand-cream uppercase tracking-wider leading-snug">
                    {t("contactForm.scanWhatsApp")}
                  </span>
                  <span className="font-sans text-[10px] text-brand-cream/50 leading-tight">
                    {t("contactForm.scanWhatsAppSub")}
                  </span>
                </div>
                <img
                  src="/images/wa_contact_1784539815049.jpg"
                  alt="WhatsApp QR Code"
                  className="w-full min-[420px]:w-32 aspect-square rounded-xl border-2 border-brand-cream/20 object-cover"
                />
              </div>
            </div>

            {/* Simulated past inquiries view */}
            {pastInquiries.length > 0 && (
              <div className="pt-2">
                <button
                  onClick={() => setShowInquiries(!showInquiries)}
                  className="font-display text-xs font-black text-brand-coral hover:text-brand-coral/80 flex items-center gap-1.5 uppercase tracking-wider"
                  id="view-sent-inquiries-toggle">
                  <Users className="w-4 h-4" />
                  {showInquiries
                    ? t("contactForm.hidePastInquiries")
                    : `${t("contactForm.pastInquiries")} (${pastInquiries.length})`}
                </button>

                {showInquiries && (
                  <div className="mt-3 space-y-3 max-h-48 overflow-y-auto bg-brand-card border-4 border-brand-charcoal p-4 rounded-2xl shadow-inner">
                    {pastInquiries.map((inq, idx) => (
                      <div
                        key={idx}
                        className="text-xs border-b-2 border-brand-charcoal/5 pb-2 last:border-0 last:pb-0">
                        <span className="font-bold text-brand-charcoal">
                          {inq.parentName}
                        </span>
                        <span className="text-brand-charcoal/50 ml-1 font-sans">
                          {t("contactForm.inquiringFor")}
                        </span>
                        <span className="font-black text-brand-teal ml-1">
                          {inq.childName}
                        </span>
                        <span className="text-brand-charcoal/80 block mt-0.5 italic">
                          "{inq.message || t("contactForm.noMessage")}"
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Column Right: Form container */}
          <div className="lg:col-span-7">
            <div className="bg-brand-card p-6 sm:p-10 rounded-[2.5rem] shadow-neo border-4 border-brand-charcoal relative min-h-[500px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="inquiry-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6">
                    {/* Honeypot — hidden from humans, filled by bots */}
                    <input
                      type="text"
                      name="website"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                      style={{
                        position: "absolute",
                        left: "-9999px",
                        opacity: 0,
                      }}
                      aria-hidden="true"
                    />
                    <div className="text-center sm:text-left">
                      <h3 className="font-display text-2xl font-black text-brand-charcoal">
                        {t("contact.title")}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-brand-charcoal/60">
                        {t("contact.weWillReply")}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Parent Name */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="parentName"
                          className="font-display text-sm font-black text-brand-charcoal block">
                          {t("contact.nameLabel")}
                        </label>
                        <input
                          type="text"
                          id="parentName"
                          name="parentName"
                          required
                          value={formData.parentName}
                          onChange={handleChange}
                          placeholder="e.g. Sarah Miller"
                          className="w-full font-sans text-sm px-4 py-3 bg-brand-cream border-2 border-brand-charcoal rounded-xl focus:bg-brand-card focus:border-brand-teal outline-none transition-all duration-200"
                        />
                      </div>

                      {/* Child Name */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="childName"
                          className="font-display text-sm font-black text-brand-charcoal block">
                          {t("contact.childNameLabel")}
                        </label>
                        <input
                          type="text"
                          id="childName"
                          name="childName"
                          required
                          value={formData.childName}
                          onChange={handleChange}
                          placeholder="e.g. Clara"
                          className="w-full font-sans text-sm px-4 py-3 bg-brand-cream border-2 border-brand-charcoal rounded-xl focus:bg-brand-card focus:border-brand-teal outline-none transition-all duration-200"
                        />
                      </div>

                      {/* Child Age */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="childAge"
                          className="font-display text-sm font-black text-brand-charcoal block">
                          {t("contact.childAgeLabel")}
                        </label>
                        <input
                          type="number"
                          id="childAge"
                          name="childAge"
                          required
                          min="3"
                          max="18"
                          value={formData.childAge}
                          onChange={handleChange}
                          placeholder="e.g. 6"
                          className="w-full font-sans text-sm px-4 py-3 bg-brand-cream border-2 border-brand-charcoal rounded-xl focus:bg-brand-card focus:border-brand-teal outline-none transition-all duration-200"
                        />
                      </div>

                      {/* Course Interest */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="courseInterest"
                          className="font-display text-sm font-black text-brand-charcoal block">
                          {t("contact.courseLabel")}
                        </label>
                        <select
                          id="courseInterest"
                          name="courseInterest"
                          required
                          value={formData.courseInterest}
                          onChange={handleChange}
                          className="w-full font-sans text-sm px-4 py-3 bg-brand-cream border-2 border-brand-charcoal rounded-xl focus:bg-brand-card focus:border-brand-teal outline-none transition-all duration-200 appearance-none cursor-pointer">
                          <option value="">
                            {t("contact.coursePlaceholder")}
                          </option>
                          <option value="echidna">
                            {lang === "zh"
                              ? "针鼹启蒙班"
                              : lang === "id"
                                ? "Kelas Ekidna"
                                : "Echidna Class"}
                          </option>
                          <option value="kasuari">
                            {lang === "zh"
                              ? "鹤鸵进阶班"
                              : lang === "id"
                                ? "Kelas Kasuari"
                                : "Kasuari Class"}
                          </option>
                          <option value="bear">
                            {lang === "zh"
                              ? "幼熊精英班"
                              : lang === "id"
                                ? "Kelas Beruang"
                                : "Bear Class"}
                          </option>
                          <option value="general">
                            {t("contactForm.generalOption")}
                          </option>
                        </select>
                      </div>

                      {/* Email Address */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="email"
                          className="font-display text-sm font-black text-brand-charcoal block">
                          {t("contact.emailLabel")}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="sarah@example.com"
                          className="w-full font-sans text-sm px-4 py-3 bg-brand-cream border-2 border-brand-charcoal rounded-xl focus:bg-brand-card focus:border-brand-teal outline-none transition-all duration-200"
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="phone"
                          className="font-display text-sm font-black text-brand-charcoal block">
                          {t("contact.whatsappLabel")}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 555-567-8901"
                          className="w-full font-sans text-sm px-4 py-3 bg-brand-cream border-2 border-brand-charcoal rounded-xl focus:bg-brand-card focus:border-brand-teal outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="font-display text-sm font-black text-brand-charcoal block">
                        {t("contact.messageLabel")}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t("contact.messagePlaceholder")}
                        className="w-full font-sans text-sm px-4 py-3 bg-brand-cream border-2 border-brand-charcoal rounded-xl focus:bg-brand-card focus:border-brand-teal outline-none transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Rate limit error */}
                    {rateLimitError && (
                      <p className="font-sans text-xs text-brand-coral text-center font-bold">
                        {lang === "id"
                          ? "Harap tunggu beberapa saat sebelum mengirim lagi."
                          : lang === "zh"
                            ? "请稍等片刻后再发送。"
                            : "Please wait a moment before sending another inquiry."}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-brand-coral hover:bg-brand-coral/95 disabled:bg-brand-coral/50 text-white font-display font-black text-xs uppercase tracking-wider py-4 rounded-2xl border-2 border-brand-charcoal shadow-neo-sm hover:translate-y-0.5 active:translate-y-1 transition-all duration-150 cursor-pointer"
                      id="contact-submit-btn">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                          {t("contact.buttonSending")}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          {t("contact.buttonSubmit")}
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="text-center py-8 px-4 space-y-6 flex flex-col items-center justify-center text-brand-charcoal">
                    <div className="w-20 h-20 bg-brand-teal/20 border-2 border-brand-charcoal rounded-full flex items-center justify-center text-brand-teal animate-bounce">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-3xl font-black text-brand-charcoal">
                        {t("contactForm.sentTitle")}
                      </h3>
                      <p className="font-sans text-base text-brand-charcoal/80 max-w-md mx-auto leading-relaxed">
                        {t("contactForm.sentSub")}
                      </p>
                    </div>

                    <div className="bg-brand-yellow/15 border-2 border-brand-charcoal rounded-2xl p-4 max-w-sm shadow-neo-xs text-brand-charcoal/80">
                      <p className="font-sans text-xs leading-snug">
                        {renderBold(t("contactForm.tipText", { email: EMAIL }))}
                      </p>
                    </div>

                    <button
                      onClick={handleResetSuccess}
                      className="bg-brand-teal hover:bg-brand-teal/95 text-white font-display font-black text-xs uppercase tracking-wider px-6 py-3.5 border-2 border-brand-charcoal rounded-xl shadow-neo-sm hover:translate-y-0.5 transition-all duration-150"
                      id="success-done-btn">
                      {t("contactForm.anotherBtn")}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
