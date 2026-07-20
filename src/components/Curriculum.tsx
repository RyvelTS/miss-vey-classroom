import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Course } from "../types";
import { COURSES_DATA } from "../data";
import {
  GraduationCap,
  CheckCircle,
  ChevronRight,
  X,
  Lightbulb,
} from "lucide-react";
import { useTranslation } from "react-i18next";

interface CurriculumProps {
  onSelectCourse: (courseId: string) => void;
}

export default function Curriculum({ onSelectCourse }: CurriculumProps) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const handleOpenDetails = (course: Course) => {
    setSelectedCourse(course);
  };

  const handleCloseDetails = () => {
    setSelectedCourse(null);
  };

  const handleEnroll = (courseId: string) => {
    setSelectedCourse(null);
    onSelectCourse(courseId);
  };

  // Age ranges translation helpers
  const ageRanges = {
    en: { echidna: "Ages 5 - 7", kasuari: "Ages 8 - 10", bear: "Ages 11 - 14" },
    id: { echidna: "Usia 5 - 7", kasuari: "Usia 8 - 10", bear: "Usia 11 - 14" },
    zh: {
      echidna: "适合年龄 5 - 7 岁",
      kasuari: "适合年龄 8 - 10 岁",
      bear: "适合年龄 11 - 14 岁",
    },
  }[lang];

  // Durations translation helpers
  const durations = {
    en: {
      echidna: "10 weeks • 45 mins/week",
      kasuari: "10 weeks • 60 mins/week",
      bear: "10 weeks • 75 mins/week",
    },
    id: {
      echidna: "10 minggu • 45 mnt/minggu",
      kasuari: "10 minggu • 60 mnt/minggu",
      bear: "10 minggu • 75 mnt/minggu",
    },
    zh: {
      echidna: "10 周 • 45 分钟/周",
      kasuari: "10 周 • 60 分钟/周",
      bear: "10 周 • 75 分钟/周",
    },
  }[lang];

  const extraText = {
    en: {
      maxKids: "Max 8 kids",
      viewOutcomes: "View Outcomes",
      aboutCourse: "About the Course",
      classCapacity: "Session Capacity",
      maxKidsFull: "8 Children Max",
      closeBtn: "Close",
    },
    id: {
      maxKids: "Maks 8 anak",
      viewOutcomes: "Lihat Hasil Belajar",
      aboutCourse: "Tentang Kelas Ini",
      classCapacity: "Kapasitas Sesi",
      maxKidsFull: "Maksimal 8 Anak",
      closeBtn: "Tutup",
    },
    zh: {
      maxKids: "每班限 8 人",
      viewOutcomes: "查看培养目标",
      aboutCourse: "课程简介",
      classCapacity: "班级容量",
      maxKidsFull: "限 8 人小班精品授课",
      closeBtn: "关闭",
    },
  }[lang];

  return (
    <section
      id="courses"
      className="py-20 bg-brand-cream px-4 sm:px-6 lg:px-8 border-t-4 border-b-4 border-brand-charcoal relative overflow-hidden">
      {/* Decorative items */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-brand-teal/10 rounded-full blur-xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-brand-yellow/10 rounded-full blur-xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-display text-brand-coral text-xs sm:text-sm font-black tracking-widest uppercase flex items-center justify-center gap-2">
            <GraduationCap className="w-5 h-5 text-brand-coral fill-brand-coral/40" />
            {t("curriculum.badge")}
          </h2>
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-brand-charcoal">
            {t("curriculum.title")}
          </h3>
          <p className="font-sans text-base sm:text-lg text-brand-charcoal/80">
            {t("curriculum.subtitle")}
          </p>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {COURSES_DATA.map((course, index) => {
            // Get translations for this specific course
            const cTrans = t(`courses.${course.id}`, {
              returnObjects: true,
            }) as {
              name: string;
              subtitle: string;
              description: string;
              keyOutcome: string;
              outcomes: string[];
            };
            const courseAge =
              ageRanges[course.id as "echidna" | "kasuari" | "bear"];
            const courseDuration =
              durations[course.id as "echidna" | "kasuari" | "bear"];

            // Map custom layout tokens dynamically
            const styleMap = {
              echidna: {
                border: "border-echidna-accent",
                btnMain:
                  "bg-amber-400 hover:bg-amber-500 text-neutral-900 shadow-neo-sm",
                btnSec:
                  "bg-emerald-600 text-white hover:bg-emerald-700 shadow-neo-sm",
                iconColor: "text-echidna-accent",
                subtitleColor: "text-echidna-accent font-bold",
              },
              kasuari: {
                border: "border-kasuari-accent",
                btnMain:
                  "bg-purple-800 hover:bg-purple-900 text-white shadow-neo-sm",
                btnSec:
                  "bg-blue-600 text-white hover:bg-blue-700 shadow-neo-sm",
                iconColor: "text-kasuari-accent",
                subtitleColor: "text-kasuari-accent font-bold",
              },
              bear: {
                border: "border-bear-accent",
                btnMain:
                  "bg-blue-600 hover:bg-blue-700 text-white shadow-neo-sm",
                btnSec:
                  "bg-amber-800 text-white hover:bg-amber-900 shadow-neo-sm",
                iconColor: "text-bear-accent",
                subtitleColor: "text-bear-accent font-bold",
              },
            }[course.id as "echidna" | "kasuari" | "bear"] || {
              border: "border-brand-charcoal",
              btnMain:
                "bg-brand-charcoal text-white hover:bg-brand-charcoal/95",
              btnSec:
                "bg-brand-card text-brand-charcoal border border-brand-charcoal",
              iconColor: "text-brand-charcoal",
              subtitleColor: "text-brand-coral",
            };

            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col bg-brand-card rounded-[2rem] overflow-hidden shadow-neo hover:translate-y-[-3px] hover:shadow-neo-lg transition-all duration-200 border-4 ${styleMap.border} relative`}>
                {/* Course Image */}
                <div className="relative aspect-square bg-brand-cream overflow-hidden group border-b-4 border-brand-charcoal">
                  <img
                    src={course.imageSrc}
                    alt={cTrans.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Course Card Body */}
                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between bg-brand-card text-brand-charcoal">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-brand-charcoal">
                        {cTrans.name}
                      </h4>
                      <p
                        className={`font-display text-xs mt-1 italic tracking-wide ${styleMap.subtitleColor}`}>
                        "{cTrans.subtitle}"
                      </p>
                    </div>

                    <p className="font-sans text-sm leading-relaxed text-brand-charcoal/80 min-h-[90px]">
                      {cTrans.description}
                    </p>
                  </div>

                  <div className="pt-6 space-y-3">
                    <button
                      onClick={() => handleEnroll(course.id)}
                      className={`w-full py-3.5 px-6 rounded-2xl font-display font-black text-xs uppercase tracking-wider border-2 border-brand-charcoal transition-all duration-150 ${styleMap.btnMain}`}
                      id={`course-btn-enroll-${course.id}`}>
                      {t("curriculum.bookClass")}
                    </button>
                    <button
                      onClick={() => handleOpenDetails(course)}
                      className={`w-full py-3 px-6 rounded-2xl font-display font-black text-xs uppercase tracking-wider border-2 border-brand-charcoal text-brand-charcoal transition-all duration-150 flex items-center justify-center gap-1.5 ${styleMap.btnSec}`}
                      id={`course-btn-details-${course.id}`}>
                      {extraText.viewOutcomes}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Course Details Modal */}
      <AnimatePresence>
        {selectedCourse &&
          (() => {
            const cTrans = t(`courses.${selectedCourse.id}`, {
              returnObjects: true,
            }) as {
              name: string;
              subtitle: string;
              description: string;
              keyOutcome: string;
              outcomes: string[];
            };
            const courseAge =
              ageRanges[selectedCourse.id as "echidna" | "kasuari" | "bear"];
            const courseDuration =
              durations[selectedCourse.id as "echidna" | "kasuari" | "bear"];

            return (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-charcoal/60 backdrop-blur-sm">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="relative w-full max-w-2xl bg-brand-cream rounded-[2.5rem] overflow-hidden shadow-neo border-4 border-brand-charcoal max-h-[90vh] flex flex-col text-brand-charcoal">
                  {/* Close Button */}
                  <button
                    onClick={handleCloseDetails}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-brand-yellow hover:bg-brand-yellow/90 text-brand-charcoal shadow-neo-xs border-2 border-brand-charcoal transition-all duration-150"
                    id="modal-close-btn">
                    <X className="w-5 h-5" />
                  </button>

                  <div className="overflow-y-auto flex-1">
                    {/* Hero section in modal */}
                      <div className="relative aspect-square bg-brand-cream border-b-4 border-brand-charcoal">
                      <img
                        src={selectedCourse.imageSrc}
                        alt={cTrans.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/30 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
                          {cTrans.name}
                        </h3>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-8 space-y-6">
                      <div className="space-y-2">
                        <h5 className="font-display text-lg font-black text-brand-charcoal">
                          {extraText.aboutCourse}
                        </h5>
                        <p className="font-sans text-sm sm:text-base text-brand-charcoal/80 leading-relaxed">
                          {cTrans.description}
                        </p>
                      </div>

                      <div className="space-y-3 bg-brand-yellow/15 border-2 border-brand-charcoal rounded-2xl p-5 shadow-neo-sm">
                        <span className="font-display text-sm font-black text-brand-coral block uppercase tracking-wider">
                          <Lightbulb className="w-4 h-4 inline" />{" "}
                          {t("curriculum.keyOutcome")}
                        </span>
                        <p className="font-sans text-sm font-extrabold text-brand-charcoal leading-snug">
                          {cTrans.keyOutcome}
                        </p>
                      </div>

                      {/* Syllabus / Outcomes checklist */}
                      <div className="space-y-3">
                        <h5 className="font-display text-lg font-black text-brand-charcoal">
                          {t("curriculum.learningOutcomes")}
                        </h5>
                        <ul className="space-y-3">
                          {cTrans.outcomes.map(
                            (outcome: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                                <span className="font-sans text-sm sm:text-base text-brand-charcoal/80 leading-tight">
                                  {outcome}
                                </span>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Action bar */}
                  <div className="p-4 sm:p-6 bg-brand-card border-t-4 border-brand-charcoal flex items-center justify-end gap-3 shrink-0">
                    <button
                      onClick={handleCloseDetails}
                      className="px-5 py-3 rounded-xl font-display font-black text-xs uppercase tracking-wider text-brand-charcoal/75 hover:text-brand-coral transition-all duration-150"
                      id="modal-cancel-btn">
                      {extraText.closeBtn}
                    </button>
                    <button
                      onClick={() => handleEnroll(selectedCourse.id)}
                      className="bg-brand-coral hover:bg-brand-coral/95 text-white font-display font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl border-2 border-brand-charcoal shadow-neo-sm hover:translate-y-0.5 active:translate-y-1 transition-all duration-150"
                      id="modal-enroll-btn">
                      {t("curriculum.bookClass")}
                    </button>
                  </div>
                </motion.div>
              </div>
            );
          })()}
      </AnimatePresence>
    </section>
  );
}
