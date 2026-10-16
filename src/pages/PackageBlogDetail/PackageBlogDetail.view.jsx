import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ChevronLeft,
  Share2,
  Printer,
  Download,
  Star,
  Clock,
  MapPin,
  ShieldCheck,
  Palmtree,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Calendar,
  User,
  Users,
  Compass,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  FileText,
  Phone,
  MessageSquare,
  Lock,
  Award,
  ExternalLink,
  Sparkles,
  Send,
  Mail,
  Loader2,
  Eye,
  Copy,
  Check,
  X,
  BookOpen,
  Camera,
  Landmark,
  Receipt,
  Briefcase,
  Plane,
  Building2,
  Scale,
  Layers,
  Info,
  CheckSquare,
  ChevronRight,
  Quote
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import ROUTES from '../../config/routes';
import { getPackageBlog } from '../../data/packageBlogData';
import PackageCard from '../../components/PackageCard/PackageCard.component';
import './PackageBlogDetail.css';

export const PackageBlogDetailView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    packages,
    favorites,
    toggleFavorite,
    user,
    showToast
  } = useApp();

  // Scroll to top when page opens or ID changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  // Reading progress state
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pkg = packages.find((p) => p.id === id) || null;
  const blog = getPackageBlog(pkg);

  // Gallery active preview
  const [activeGalleryIdx, setActiveGalleryIdx] = useState(0);

  // 4-Part Document Filter Tabs State
  const [docTabFilter, setDocTabFilter] = useState('all');

  // FAQ Accordion state
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaqIdx((prev) => (prev === idx ? null : idx));
  };

  // Booking inquiry form state
  const [applicantCount, setApplicantCount] = useState(1);
  const [travelDate, setTravelDate] = useState('');
  const [formName, setFormName] = useState(user?.name || '');
  const [formEmail, setFormEmail] = useState(user?.email || '');
  const [formPhone, setFormPhone] = useState(user?.phone || '');
  const [formNotes, setFormNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (!formName || !formEmail) {
      showToast('Please enter your name and email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast(`Inquiry for ${pkg.title} successfully sent! Our consular team will contact you.`);
    }, 1200);
  };

  // Share link handler
  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link copied to clipboard!');
    }
  };

  // Full-Width 8-Testimonial Auto Carousel
  const [reviewSlide, setReviewSlide] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);

  const curatedTestimonials = [
    {
      id: 'rev-1',
      name: blog.reviews?.[0]?.name || 'Elena Rostova',
      avatar: blog.reviews?.[0]?.avatar || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=140&q=80',
      rating: 5,
      timeAgo: '1 day ago',
      comment: blog.reviews?.[0]?.comment || 'RH Global handled my Australian Subclass 600 visa flawlessly. Lodgment took 2 days, biometrics were completed on Tuesday, and my grant notice was ready on Friday morning. Super fast!'
    },
    {
      id: 'rev-2',
      name: 'David Van Houten',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=140&q=80',
      rating: 5,
      timeAgo: '3 days ago',
      comment: 'Needed 4 Schengen visas for an urgent board summit in Geneva and Milan. Standard wait was 6 weeks. RH Global booked our VFS slots within 4 days and all four passports came back approved in 11 days flat.'
    },
    {
      id: 'rev-3',
      name: 'Dr. Ananya Sharma',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=140&q=80',
      rating: 5,
      timeAgo: '5 days ago',
      comment: 'The dossier checklist and cover letter RH prepared were impeccable. The consular officer remarked that it was the cleanest application package she had seen all week. Approved without interview delay!'
    },
    {
      id: 'rev-4',
      name: 'Marcus Sterling',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=140&q=80',
      rating: 5,
      timeAgo: '1 week ago',
      comment: 'Their 1-on-1 consular interview preparation eliminated all uncertainties. Interview took less than 2 minutes and my 10-year US visa was issued without any admin processing delay.'
    },
    {
      id: 'rev-5',
      name: 'Claire Beauchamp',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=140&q=80',
      rating: 5,
      timeAgo: '1 week ago',
      comment: 'From the Swiss Alps helicopter transfer to private chalet chef bookings, every detail was orchestrated with world-class finesse. RH Global is our company’s go-to for executive luxury travel.'
    },
    {
      id: 'rev-6',
      name: 'Vikramaditya Roy',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=140&q=80',
      rating: 5,
      timeAgo: '2 weeks ago',
      comment: 'Secured priority clearance in London in 5 working days. The financial sponsorship documentation and tax ties guidance saved us from weeks of back-and-forth.'
    },
    {
      id: 'rev-7',
      name: 'Sophia Al-Maktoum',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=140&q=80',
      rating: 5,
      timeAgo: '3 weeks ago',
      comment: 'Exquisite 14-day Japan cherry blossom tour with private ryokan and tea master sessions in Kyoto. Complete eVisa concierge was taken care of in 48 hours without paperwork stress.'
    },
    {
      id: 'rev-8',
      name: 'Rohan & Meera Kapoor',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=140&q=80',
      rating: 5,
      timeAgo: '1 month ago',
      comment: 'Our honeymoon overwater villa in the Maldives was spectacular. Private seaplane transfer, bespoke dining on a secluded sandbank, and seamless speed at airport immigration.'
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalTestimonials = curatedTestimonials.length;
  const maxSlide = Math.max(0, totalTestimonials - cardsPerView);

  useEffect(() => {
    if (isCarouselHovered) return;
    const interval = setInterval(() => {
      setReviewSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(interval);
  }, [isCarouselHovered, maxSlide]);

  const handlePrevSlide = () => setReviewSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  const handleNextSlide = () => setReviewSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));



  if (!pkg || !blog) {
    return (
      <div className="rh-tab-content-wrap animate-fade-in">
        <div className="rh-detail-page-nav">
          <button
            type="button"
            className="rh-back-link-btn"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft size={18} />
            <span>Back</span>
          </button>
        </div>

        <div className="rh-empty-auth-card">
          <AlertCircle size={44} color="#dc2626" />
          <h3>Package Not Found</h3>
          <p>We could not find the travel package or visa guide for reference ID "{id}".</p>
          <button
            type="button"
            className="rh-btn-primary"
            style={{ marginTop: '16px' }}
            onClick={() => navigate(ROUTES.VISA_PACKAGES)}
          >
            Browse Visa Packages
          </button>
        </div>
      </div>
    );
  }

  const isFavorite = favorites.includes(pkg.id);
  const isVisa = pkg.category === 'visa';

  const defaultVisaImages = [
    {
      url: pkg.heroImage || 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80',
      title: 'Australia Destination & Travel Corridor',
      tag: 'Main Destination'
    },
    {
      url: 'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?auto=format&fit=crop&w=800&q=80',
      title: 'Official Passport & Visa Stamps',
      tag: 'Passport & Visa'
    },
    {
      url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
      title: 'International Flights & Priority Boarding',
      tag: 'Flight Transit'
    },
    {
      url: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
      title: 'Sydney Harbour & Iconic Landmarks',
      tag: 'Entry Port'
    },
    {
      url: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80',
      title: 'Airport Terminal & Biometrics Gate',
      tag: 'Biometric Gate'
    }
  ];

  const defaultHolidayImages = [
    {
      url: pkg.heroImage || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      title: 'Luxury Destination Overview',
      tag: 'Main Overview'
    },
    {
      url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
      title: 'Bespoke Luxury Stays',
      tag: 'Luxury Stays'
    },
    {
      url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      title: 'Executive Experiences',
      tag: 'Wellness & Spa'
    },
    {
      url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
      title: 'Private Yacht & Excursions',
      tag: 'Adventures'
    },
    {
      url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80',
      title: 'Gourmet Dining & Sunset Retreat',
      tag: 'VIP Dining'
    }
  ];

  const galleryList = isVisa ? defaultVisaImages : defaultHolidayImages;
  const relatedPackages = packages.filter((p) => p.id !== pkg.id).slice(0, 3);

  return (
    <div className="rh-blog-page-root animate-fade-in">
      {/* Reading Progress Top Bar */}
      <div
        className="rh-reading-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        title={`${Math.round(scrollProgress)}% read`}
      />

      {/* Top Header / Breadcrumb Bar */}
      <div className="rh-blog-nav-header">
        <button
          type="button"
          className="rh-back-link-btn"
          onClick={() => {
            if (isVisa) {
              navigate(ROUTES.VISA_PACKAGES);
            } else {
              navigate(ROUTES.HOLIDAY_PACKAGES);
            }
          }}
        >
          <ChevronLeft size={18} />
          <span>{isVisa ? 'All Visa Services' : 'All Holiday Packages'}</span>
        </button>

        {/* Breadcrumb Links */}
        <div className="rh-blog-breadcrumbs">
          <Link to={ROUTES.DASHBOARD} className="rh-breadcrumb-link">Dashboard</Link>
          <span className="rh-breadcrumb-sep">/</span>
          <Link
            to={isVisa ? ROUTES.VISA_PACKAGES : ROUTES.HOLIDAY_PACKAGES}
            className="rh-breadcrumb-link"
          >
            {isVisa ? 'Visa Services' : 'Holiday Packages'}
          </Link>
          <span className="rh-breadcrumb-sep">/</span>
          <span className="rh-breadcrumb-current">{pkg.country}</span>
        </div>

        {/* Action Controls */}
        <div className="rh-blog-top-actions">
          <button
            type="button"
            className="rh-icon-pill-btn"
            onClick={handleShare}
            title="Share this guide"
          >
            <Share2 size={16} />
            <span className="rh-btn-text-desktop">Share</span>
          </button>

          <button
            type="button"
            className="rh-icon-pill-btn"
            onClick={() => window.print()}
            title="Print / Save as PDF"
          >
            <Printer size={16} />
            <span className="rh-btn-text-desktop">Print</span>
          </button>
        </div>
      </div>

      {/* Article Header & Editorial Masthead */}
      <header className="rh-blog-editorial-header">
        {/* Category & Badge Row */}
        <div className="rh-blog-meta-tags">
          <span className={`rh-editorial-category-tag ${isVisa ? 'visa' : 'holiday'}`}>
            {isVisa ? <ShieldCheck size={14} /> : <Palmtree size={14} />}
            <span>{isVisa ? 'Official Visa Service' : 'Curated Luxury Holiday'}</span>
          </span>

          <span className="rh-editorial-country-tag">
            <span className="rh-flag">{pkg.flag}</span>
            <span>{pkg.country}</span>
          </span>

          {pkg.badge && (
            <span className="rh-editorial-highlight-badge">
              <Sparkles size={13} />
              <span>{pkg.badge}</span>
            </span>
          )}

          <div className="rh-editorial-rating">
            <Star size={14} fill="#fbbf24" color="#fbbf24" />
            <strong>{pkg.rating}</strong>
            <span>({pkg.reviewsCount} reviews)</span>
          </div>
        </div>

        {/* Main Article Title */}
        <h1 className="rh-blog-main-title">{blog.articleTitle}</h1>

        {/* Subtitle / Deck */}
        <p className="rh-blog-deck-subtitle">{blog.heroSubtitle}</p>

        {/* Luxury Multi-Image Hero Showcase (1 Large Featured Banner + 4 Visa-Related Images) */}
        <div className="rh-luxury-hero-mosaic">
          {/* Main Large Featured Banner */}
          <div
            className="rh-mosaic-main"
            onClick={() => setActiveGalleryIdx(0)}
          >
            <img
              src={galleryList[activeGalleryIdx]?.url || galleryList[0].url}
              alt={pkg.title}
              className="rh-mosaic-main-img"
            />
            <div className="rh-mosaic-main-scrim"></div>

            {/* Quick Metrics Overlay Strip on the Main Banner */}
            <div className="rh-hero-metrics-overlay">
              <div className="rh-hero-metric-tile">
                <Clock size={16} className="rh-hero-metric-icon" />
                <div>
                  <span className="rh-metric-label">Duration / Speed</span>
                  <strong className="rh-metric-value">{pkg.duration}</strong>
                </div>
              </div>

              <div className="rh-hero-metric-tile">
                <Compass size={16} className="rh-hero-metric-icon" />
                <div>
                  <span className="rh-metric-label">{isVisa ? 'Coverage' : 'Distance / Scale'}</span>
                  <strong className="rh-metric-value">{pkg.distance}</strong>
                </div>
              </div>

              <div className="rh-hero-metric-tile">
                <ShieldCheck size={16} className="rh-hero-metric-icon" />
                <div>
                  <span className="rh-metric-label">Status Guarantee</span>
                  <strong className="rh-metric-value">{pkg.visaStatus}</strong>
                </div>
              </div>

              <div className="rh-hero-metric-tile price-tile">
                <div>
                  <span className="rh-metric-label">Starting Price</span>
                  <strong className="rh-metric-value price">₹{pkg.price.toLocaleString('en-IN')}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right 2x2 Grid of Visa-Related Images */}
          <div className="rh-mosaic-grid-side">
            {galleryList.slice(1, 5).map((imgObj, idx) => {
              const actualIdx = idx + 1;
              const isSelected = activeGalleryIdx === actualIdx;
              return (
                <div
                  key={actualIdx}
                  className={`rh-mosaic-sub-card ${isSelected ? 'active' : ''}`}
                  onClick={() => setActiveGalleryIdx(actualIdx)}
                >
                  <img
                    src={imgObj.url}
                    alt={imgObj.title}
                    className="rh-mosaic-sub-img"
                    loading="lazy"
                  />
                  <div className="rh-mosaic-sub-overlay">
                    <span className="rh-mosaic-sub-tag">{imgObj.tag}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main 2-Column Content Layout (Article + Sticky Sidebar) */}
      <div className="rh-blog-layout-grid">
        {/* Left Column: Full Editorial Blog Content */}
        <article className="rh-blog-main-content">
          {/* Executive Pull Quote */}
          {blog.heroQuote && (
            <blockquote className="rh-blog-pull-quote">
              <p>{blog.heroQuote}</p>
              <footer>— {blog.author?.name}, {blog.author?.role}</footer>
            </blockquote>
          )}

          {/* Key Takeaways Callout Box */}
          {blog.keyTakeaways && blog.keyTakeaways.length > 0 && (
            <div className="rh-key-takeaways-card">
              <div className="rh-takeaways-header">
                <Sparkles size={18} className="rh-takeaways-icon" />
                <h3>At A Glance: Key Highlights</h3>
              </div>
              <ul className="rh-takeaways-list">
                {blog.keyTakeaways.map((point, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className="rh-takeaway-check" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Table of Contents / Quick Jump */}
          {blog.tableOfContents && blog.tableOfContents.length > 0 && (
            <nav className="rh-blog-toc-box">
              <h4 className="rh-toc-title">Table of Contents</h4>
              <div className="rh-toc-links-grid">
                {blog.tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="rh-toc-link"
                    onClick={(e) => {
                      e.preventDefault();
                      const targetEl = document.getElementById(item.id);
                      if (targetEl) {
                        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                  >
                    <span>{item.title}</span>
                  </a>
                ))}
              </div>
            </nav>
          )}

          {/* Introduction Paragraphs */}
          <div className="rh-blog-prose-intro">
            {blog.introduction && blog.introduction.map((para, idx) => (
              <p key={idx} className={idx === 0 ? 'rh-lead-paragraph' : ''}>
                {para}
              </p>
            ))}
          </div>

          {/* Structured Editorial Sections */}
          {blog.sections && blog.sections.map((section) => (
            <section key={section.id} id={section.id} className="rh-blog-section-block">
              <h2 className="rh-blog-section-heading">{section.heading}</h2>

              {section.content && (
                <div className="rh-blog-section-body">
                  {section.content.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              )}

              {/* Callout Notice */}
              {section.callout && (
                <div className={`rh-blog-callout-box ${section.callout.type || 'info'}`}>
                  <div className="rh-callout-header">
                    <AlertCircle size={18} />
                    <h4>{section.callout.title}</h4>
                  </div>
                  <p>{section.callout.text}</p>
                </div>
              )}

              {/* Perks / Benefits List */}
              {section.perks && (
                <div className="rh-perks-grid">
                  {section.perks.map((perk, perkIdx) => (
                    <div key={perkIdx} className="rh-perk-item">
                      <div className="rh-perk-bullet">
                        <CheckCircle2 size={16} />
                      </div>
                      <p>{perk}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Timeline Roadmap */}
              {section.timeline && (
                <div className="rh-timeline-interactive">
                  <div className="rh-timeline-spine"></div>
                  {section.timeline.map((step, sIdx) => (
                    <div key={sIdx} className="rh-timeline-step-card">
                      <div className="rh-step-number-node">{sIdx + 1}</div>
                      <div className="rh-step-content-card">
                        <span className="rh-step-day-badge">{step.day}</span>
                        <h4 className="rh-step-card-title">{step.title}</h4>
                        <p className="rh-step-card-detail">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Consular Pro Tips */}
              {section.tipsList && (
                <div className="rh-pro-tips-card">
                  <div className="rh-tips-card-header">
                    <ShieldCheck size={20} className="rh-tips-icon" />
                    <h4>Consular Officer Recommendations</h4>
                  </div>
                  <ul className="rh-tips-list">
                    {section.tipsList.map((tip, tIdx) => (
                      <li key={tIdx}>
                        <CheckCircle2 size={16} className="rh-tip-check" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}

          {/* Official Required Documents Section (4 Parts) */}
          {(() => {
            const getDocIcon = (name, category) => {
              const lower = name.toLowerCase();
              if (lower.includes('passport') || lower.includes('bio page')) return BookOpen;
              if (lower.includes('photo')) return Camera;
              if (lower.includes('bank') || lower.includes('solvency')) return Landmark;
              if (lower.includes('tax') || lower.includes('itr') || lower.includes('assessment')) return Receipt;
              if (lower.includes('employment') || lower.includes('leave') || lower.includes('salary') || lower.includes('noc') || lower.includes('sponsorship')) return Briefcase;
              if (lower.includes('insurance')) return ShieldCheck;
              if (lower.includes('flight') || lower.includes('airline')) return Plane;
              if (lower.includes('hotel') || lower.includes('accommodation')) return Building2;
              if (lower.includes('form') || lower.includes('ds-160') || lower.includes('appointment')) return FileText;
              if (category === 'conditional') return Scale;
              if (category === 'optional') return Sparkles;
              return FileText;
            };

            const allChecklistItems = (blog.checklist || []).map((item) => {
              let cat = item.category;
              if (!cat) {
                const lower = item.name.toLowerCase();
                if (lower.includes('bank') || lower.includes('tax') || lower.includes('itr') || lower.includes('employment') || lower.includes('leave notice') || lower.includes('salary')) {
                  cat = 'conditional';
                } else if (item.required === false) {
                  cat = 'optional';
                } else {
                  cat = 'mandatory';
                }
              }
              return {
                ...item,
                category: cat,
                group: item.group || (cat === 'conditional' ? 'Financial & Employment Sufficiency' : null),
                groupRule: item.groupRule || (cat === 'conditional' ? 'Submit Any 2 of these 3 documents' : null),
                tip: item.tip || (cat === 'mandatory' ? 'Strictly required by consular law. Must match passport details without spelling errors.' : cat === 'conditional' ? 'Provide any 2 of these 3 documents to verify liquid cash flow and career stability.' : 'Strongly recommended by immigration adjudicators to expedite approval.')
              };
            });

            const mandatoryDocs = allChecklistItems.filter((d) => d.category === 'mandatory');
            const conditionalDocs = allChecklistItems.filter((d) => d.category === 'conditional');
            const optionalDocs = allChecklistItems.filter((d) => d.category === 'optional');

            const filteredDocs = allChecklistItems.filter((doc) => {
              if (docTabFilter === 'all') return true;
              return doc.category === docTabFilter;
            });

            return (
              <section id="document-checklist" className="rh-blog-section-block rh-enhanced-dossier-section">
                {/* Section Header */}
                <div className="rh-dossier-header-wrap simple-header">
                  <div className="rh-dossier-title-col">
                    <div className="rh-dossier-badge-pill">
                      <ShieldCheck size={14} />
                      <span>CONSULAR DOSSIER SPECIFICATION</span>
                    </div>
                    <h2 className="rh-blog-section-heading">Official Required Documents Checklist</h2>
                    <p className="rh-section-lead-note">
                      Clear breakdown of <strong>Mandatory</strong> embassy requirements, the conditional <strong>Submit Any 2 of 3</strong> financial trio, and recommended supporting documents.
                    </p>
                  </div>
                </div>

                {/* 4-Part Filter Tabs Bar */}
                <div className="rh-dossier-tabs-bar">
                  <button
                    type="button"
                    className={`rh-dossier-tab-btn ${docTabFilter === 'all' ? 'active' : ''}`}
                    onClick={() => setDocTabFilter('all')}
                  >
                    <Layers size={14} />
                    <span>Part 1: All Documents</span>
                    <span className="rh-tab-count">{allChecklistItems.length}</span>
                  </button>

                  <button
                    type="button"
                    className={`rh-dossier-tab-btn mandatory ${docTabFilter === 'mandatory' ? 'active' : ''}`}
                    onClick={() => setDocTabFilter('mandatory')}
                  >
                    <span className="rh-tab-dot mandatory"></span>
                    <span>Part 2: Mandatory</span>
                    <span className="rh-tab-count">{mandatoryDocs.length}</span>
                  </button>

                  {conditionalDocs.length > 0 && (
                    <button
                      type="button"
                      className={`rh-dossier-tab-btn conditional ${docTabFilter === 'conditional' ? 'active' : ''}`}
                      onClick={() => setDocTabFilter('conditional')}
                    >
                      <Scale size={14} />
                      <span>Part 3: Submit Any 2 of 3</span>
                      <span className="rh-tab-tag-pill">Any 2</span>
                    </button>
                  )}

                  {optionalDocs.length > 0 && (
                    <button
                      type="button"
                      className={`rh-dossier-tab-btn optional ${docTabFilter === 'optional' ? 'active' : ''}`}
                      onClick={() => setDocTabFilter('optional')}
                    >
                      <Sparkles size={14} />
                      <span>Part 4: Optional / Supporting</span>
                      <span className="rh-tab-count">{optionalDocs.length}</span>
                    </button>
                  )}
                </div>



                {/* Cards Grid */}
                <div className="rh-interactive-checklist-grid new-design">
                  {filteredDocs.map((item) => {
                    const DocIcon = getDocIcon(item.name, item.category);

                    return (
                      <div
                        key={item.id}
                        className={`rh-checklist-card-v2 ${item.category}`}
                      >
                        {/* Document Icon in tailored gradient */}
                        <div className={`rh-doc-icon-box ${item.category}`}>
                          <DocIcon size={22} />
                        </div>

                        {/* Document Info */}
                        <div className="rh-doc-content-col">
                          <div className="rh-doc-badge-row">
                            {item.category === 'mandatory' && (
                              <span className="rh-cat-badge mandatory">
                                <AlertCircle size={12} />
                                <span>MANDATORY • REQUIRED FOR ALL</span>
                              </span>
                            )}
                            {item.category === 'conditional' && (
                              <span className="rh-cat-badge conditional">
                                <Scale size={12} />
                                <span>CHOOSE ANY 2 OF 3 • FINANCIAL TRIO</span>
                              </span>
                            )}
                            {item.category === 'optional' && (
                              <span className="rh-cat-badge optional">
                                <Sparkles size={12} />
                                <span>OPTIONAL • BOOSTS APPROVAL SPEED</span>
                              </span>
                            )}
                          </div>

                          <h4 className="rh-doc-card-title">{item.name}</h4>
                          <p className="rh-doc-card-desc">{item.desc}</p>

                          {/* Consular Advice Tip */}
                          {item.tip && (
                            <div className="rh-doc-tip-row">
                              <Info size={13} className="rh-tip-icon" />
                              <span className="rh-tip-text">{item.tip}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })()}

          {/* Full Inclusions & RH VIP Services */}
          <section id="inclusions" className="rh-blog-section-block">
            <h2 className="rh-blog-section-heading">What Is Included In This Package</h2>
            <div className="rh-inclusions-editorial-grid">
              {(pkg.inclusions || []).map((inc, iIdx) => (
                <div key={iIdx} className="rh-inclusion-card">
                  <div className="rh-inc-icon-wrap">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="rh-inc-title">{inc}</h4>
                    <span className="rh-inc-sub">Included with RH Concierge</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="rh-visa-policy-notice-box">
              <ShieldCheck size={22} className="rh-policy-icon" />
              <div>
                <strong>RH Global Consular Guarantee:</strong> {pkg.visaStatus}. All documentation is reviewed by authorized immigration and travel attorneys before embassy submission.
              </div>
            </div>
          </section>

          {/* Interactive FAQ Accordion */}
          {blog.faqs && blog.faqs.length > 0 && (
            <section id="frequently-asked-questions" className="rh-blog-section-block">
              <h2 className="rh-blog-section-heading">Frequently Asked Questions</h2>
              <div className="rh-faq-accordion-wrap">
                {blog.faqs.map((faq, fIdx) => {
                  const isOpen = openFaqIdx === fIdx;
                  return (
                    <div
                      key={fIdx}
                      className={`rh-faq-item-card ${isOpen ? 'open' : ''}`}
                    >
                      <button
                        type="button"
                        className="rh-faq-question-btn"
                        onClick={() => toggleFaq(fIdx)}
                      >
                        <span className="rh-faq-question-text">{faq.q}</span>
                        <div className="rh-faq-toggle-arrow">
                          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="rh-faq-answer-panel animate-fade-in">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}



        </article>

        {/* Right Column: Sticky Booking & Concierge Card */}
        <aside className="rh-blog-sidebar">
          <div className="rh-sticky-booking-card">


            {/* Fast-Track Inquiry / Booking Form */}
            {isSubmitted ? (
              <div className="rh-booking-submitted-card animate-fade-in">
                <div className="rh-submitted-check-circle">
                  <CheckCircle2 size={36} color="#059669" />
                </div>
                <h3>Application Request Received!</h3>
                <p>
                  Thank you, <strong>{formName}</strong>. Our senior immigration advisor for {pkg.country} has received your dossier request and will contact you via email ({formEmail}) within 2 business hours.
                </p>
                <button
                  type="button"
                  className="rh-reset-booking-btn"
                  onClick={() => setIsSubmitted(false)}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="rh-sidebar-booking-form">

                <div className="rh-form-group">
                  <label htmlFor="blog-applicant-name">Full Name</label>
                  <div className="rh-form-input-wrap">
                    <User size={15} className="rh-input-icon" />
                    <input
                      id="blog-applicant-name"
                      type="text"
                      required
                      placeholder="e.g. David Chen"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="rh-form-group">
                  <label htmlFor="blog-applicant-email">Email Address</label>
                  <div className="rh-form-input-wrap">
                    <Mail size={15} className="rh-input-icon" />
                    <input
                      id="blog-applicant-email"
                      type="email"
                      required
                      placeholder="e.g. david.chen@acmeglobal.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="rh-form-group">
                  <label htmlFor="blog-applicant-phone">Phone / WhatsApp</label>
                  <div className="rh-form-input-wrap">
                    <Phone size={15} className="rh-input-icon" />
                    <input
                      id="blog-applicant-phone"
                      type="tel"
                      placeholder="+971 50 123 4567"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className="rh-form-row-2col">
                  <div className="rh-form-group">
                    <label htmlFor="blog-travel-date">Target Date</label>
                    <div className="rh-form-input-wrap">
                      <Calendar size={15} className="rh-input-icon" />
                      <input
                        id="blog-travel-date"
                        type="date"
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="rh-form-group">
                    <label>Applicants</label>
                    <div className="rh-applicant-counter-row">
                      <button
                        type="button"
                        className="rh-counter-btn"
                        onClick={() => setApplicantCount((prev) => Math.max(1, prev - 1))}
                        disabled={applicantCount <= 1}
                      >
                        -
                      </button>
                      <span className="rh-counter-display">{applicantCount}</span>
                      <button
                        type="button"
                        className="rh-counter-btn"
                        onClick={() => setApplicantCount((prev) => prev + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>




                {/* Submit Action Button */}
                <button
                  type="submit"
                  className="rh-sidebar-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Transmitting Dossier...</span>
                    </>
                  ) : (
                    <>
                      <span>{isVisa ? 'Book Priority Visa Slot' : 'Confirm Tour Inquiry'}</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </aside>
      </div>

      {/* Verified Client Testimonials - Full Width Auto Carousel (Cards Only - Speech Bubble Design) */}
      <section id="client-reviews" className="rh-fullwidth-testimonials-section minimal-cards-only">
        <div className="rh-testimonials-container">
          {/* Carousel Track Viewport */}
          <div
            className="rh-carousel-viewport"
            onMouseEnter={() => setIsCarouselHovered(true)}
            onMouseLeave={() => setIsCarouselHovered(false)}
          >
            <div
              className="rh-carousel-track"
              style={{
                transform: `translateX(-${reviewSlide * (100 / cardsPerView)}%)`,
                transition: 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
            >
              {curatedTestimonials.map((rev, rIdx) => (
                <div
                  key={rev.id || rIdx}
                  className="rh-carousel-slide"
                  style={{ flex: `0 0 ${100 / cardsPerView}%` }}
                >
                  <div className="rh-speech-card-wrapper">
                    {/* Top Speech Bubble */}
                    <div className="rh-speech-bubble">
                      <p className="rh-speech-comment">
                        {rev.comment}
                      </p>
                      <div className="rh-speech-stars">
                        {[...Array(rev.rating || 5)].map((_, s) => (
                          <Star key={s} size={15} fill="#10b981" color="#10b981" />
                        ))}
                      </div>
                    </div>

                    {/* Author Row directly under the speech bubble tail */}
                    <div className="rh-speech-author-row">
                      <img
                        src={rev.avatar}
                        alt={rev.name}
                        className="rh-speech-avatar"
                        loading="lazy"
                      />
                      <div className="rh-speech-author-info">
                        <strong className="rh-speech-name">{rev.name}</strong>
                        <span className="rh-speech-time">{rev.timeAgo || '3 days ago'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section: Related Packages */}
      {relatedPackages.length > 0 && (
        <section className="rh-related-packages-section">
          <div className="rh-section-header-row">
            <div>
              <h2 className="rh-section-title">Explore More Packages & Official Guides</h2>
              <p className="rh-section-desc">
                Browse our other high-approval visa pathways and world-class luxury destinations.
              </p>
            </div>
            <button
              type="button"
              className="rh-section-view-all"
              onClick={() => {
                if (isVisa) {
                  navigate(ROUTES.VISA_PACKAGES);
                } else {
                  navigate(ROUTES.HOLIDAY_PACKAGES);
                }
              }}
            >
              <span>{isVisa ? 'View All Visa Services' : 'View All Holidays'}</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="rh-packages-grid full-width">
            {relatedPackages.map((relPkg) => (
              <PackageCard
                key={relPkg.id}
                pkg={relPkg}
                isFavorite={favorites.includes(relPkg.id)}
                onToggleFavorite={toggleFavorite}
                onSelect={(p) => navigate(`/packages/${p.id}`)}
              />
            ))}
          </div>
        </section>
      )}

      {/* Mobile Floating Bottom Bar */}
      <div className="rh-mobile-bottom-booking-bar">
        <div className="rh-mobile-price-wrap">
          <span className="rh-mobile-price-label">From</span>
          <span className="rh-mobile-price-amount">₹{pkg.price.toLocaleString('en-IN')}</span>
          <span className="rh-mobile-price-unit">/ person</span>
        </div>

        <button
          type="button"
          className="rh-mobile-cta-btn"
          onClick={() => {
            const formEl = document.querySelector('.rh-sticky-booking-card');
            if (formEl) {
              formEl.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <span>{isVisa ? 'Book Visa Slot' : 'Book Trip'}</span>
          <ArrowRight size={15} />
        </button>
      </div>

    </div>
  );
};

export default PackageBlogDetailView;
