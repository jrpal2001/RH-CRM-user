import React, { useState } from 'react';
import {
  ChevronLeft,
  Heart,
  Star,
  Clock,
  Compass,
  CheckCircle2,
  ShieldCheck,
  Plus,
  MapPin
} from 'lucide-react';

export default function PackageDetailModal({
  pkg,
  onClose,
  isFavorite,
  onToggleFavorite,
  onBookNow
}) {
  const [activeTab, setActiveTab] = useState('details'); // 'details' | 'route' | 'inclusions'
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  if (!pkg) return null;

  const images = pkg.gallery && pkg.gallery.length > 0 ? pkg.gallery : [pkg.heroImage];

  const handleBookingClick = () => {
    setBookingSuccess(true);
    if (onBookNow) onBookNow(pkg);
    setTimeout(() => {
      setBookingSuccess(false);
    }, 4000);
  };

  return (
    <div className="rh-modal-backdrop" onClick={onClose}>
      <div
        className="rh-detail-sheet animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Action Bar */}
        <div className="rh-detail-top-nav">
          <button
            type="button"
            className="rh-detail-nav-btn"
            onClick={onClose}
            title="Back"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="rh-detail-nav-right">
            <button
              type="button"
              className={`rh-detail-nav-btn ${isFavorite ? 'favorited' : ''}`}
              onClick={() => onToggleFavorite(pkg.id)}
              title="Bookmark"
            >
              <Heart
                size={18}
                fill={isFavorite ? '#ef4444' : 'none'}
                color={isFavorite ? '#ef4444' : '#ffffff'}
              />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div className="rh-detail-scroll-area no-scrollbar">
          {/* Main Hero Gallery */}
          <div className="rh-detail-hero-wrap">
            <img
              src={images[activeImageIdx]}
              alt={pkg.title}
              className="rh-detail-hero-img"
            />
            <div className="rh-detail-hero-scrim"></div>

            {/* Pagination Dots */}
            {images.length > 1 && (
              <div className="rh-gallery-dots">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`rh-gallery-dot ${activeImageIdx === idx ? 'active' : ''}`}
                    onClick={() => setActiveImageIdx(idx)}
                  ></button>
                ))}
              </div>
            )}

            {/* Destination Overlay */}
            <div className="rh-detail-title-overlay">
              <div className="rh-detail-location-row">
                <MapPin size={14} className="rh-pin-icon" />
                <span>{pkg.country}</span>
                <span className="rh-detail-flag">{pkg.flag}</span>
              </div>
              <h1 className="rh-detail-title">{pkg.title}</h1>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="rh-metrics-bar">
            <div className="rh-metric-box">
              <Clock size={16} className="rh-metric-icon" />
              <div className="rh-metric-data">
                <span className="rh-metric-val">{pkg.duration}</span>
                <span className="rh-metric-lbl">Duration</span>
              </div>
            </div>

            <div className="rh-metric-divider"></div>

            <div className="rh-metric-box">
              <Compass size={16} className="rh-metric-icon" />
              <div className="rh-metric-data">
                <span className="rh-metric-val">{pkg.distance}</span>
                <span className="rh-metric-lbl">Distance/Scale</span>
              </div>
            </div>

            <div className="rh-metric-divider"></div>

            <div className="rh-metric-box">
              <Star size={16} className="rh-metric-icon star" fill="#fbbf24" color="#fbbf24" />
              <div className="rh-metric-data">
                <span className="rh-metric-val">{pkg.rating} ({pkg.reviewsCount})</span>
                <span className="rh-metric-lbl">Reviews</span>
              </div>
            </div>
          </div>

          {/* Tab Selection */}
          <div className="rh-detail-tabs">
            <button
              type="button"
              className={`rh-tab-btn ${activeTab === 'details' ? 'active' : ''}`}
              onClick={() => setActiveTab('details')}
            >
              Details
            </button>
            <button
              type="button"
              className={`rh-tab-btn ${activeTab === 'route' ? 'active' : ''}`}
              onClick={() => setActiveTab('route')}
            >
              Route List
            </button>
            <button
              type="button"
              className={`rh-tab-btn ${activeTab === 'inclusions' ? 'active' : ''}`}
              onClick={() => setActiveTab('inclusions')}
            >
              Visa & Inclusions
            </button>
          </div>

          {/* Tab Content */}
          <div className="rh-tab-content">
            {activeTab === 'details' && (
              <div className="rh-tab-pane animate-fade-in">
                <h3 className="rh-pane-title">About {pkg.title}</h3>
                <p className="rh-pane-text">{pkg.description}</p>

                {/* Highlights tags */}
                <div className="rh-tags-cloud">
                  {pkg.tags.map((tag, i) => (
                    <span key={i} className="rh-feature-tag">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Gallery Previews */}
                <div className="rh-gallery-section">
                  <div className="rh-gallery-section-header">
                    <h4>Gallery</h4>
                    <span>{images.length} photos</span>
                  </div>
                  <div className="rh-gallery-grid">
                    {images.map((imgUrl, i) => (
                      <div
                        key={i}
                        className={`rh-gallery-thumb-wrap ${activeImageIdx === i ? 'active' : ''}`}
                        onClick={() => setActiveImageIdx(i)}
                      >
                        <img src={imgUrl} alt={`Preview ${i}`} className="rh-gallery-thumb" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'route' && (
              <div className="rh-tab-pane animate-fade-in">
                <h3 className="rh-pane-title">Itinerary & Schedule</h3>
                <div className="rh-route-list">
                  {pkg.routeList.map((item, idx) => (
                    <div key={idx} className="rh-route-item">
                      <div className="rh-route-day-pill">{item.day}</div>
                      <div className="rh-route-stop-text">{item.stop}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'inclusions' && (
              <div className="rh-tab-pane animate-fade-in">
                <h3 className="rh-pane-title">What is Included</h3>
                <div className="rh-inclusions-list">
                  {pkg.inclusions.map((inc, idx) => (
                    <div key={idx} className="rh-inclusion-item">
                      <CheckCircle2 size={16} className="rh-inc-check" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>

                <div className="rh-visa-policy-card">
                  <div className="rh-policy-icon">
                    <ShieldCheck size={20} />
                  </div>
                  <div className="rh-policy-text">
                    <strong>Visa Assistance Guarantee:</strong> {pkg.visaStatus}. Our CRM consultants manage your application with priority embassy tracking.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Floating Bottom Booking CTA Bar */}
        <div className="rh-detail-footer">
          <div className="rh-footer-price-wrap">
            <span className="rh-footer-price-label">Total Price</span>
            <div className="rh-footer-price">
              <span className="rh-footer-currency">$</span>
              <span className="rh-footer-val">{pkg.price.toLocaleString()}</span>
            </div>
            <span className="rh-footer-note">{pkg.priceNote}</span>
          </div>

          <button
            type="button"
            className={`rh-floating-cta-btn ${bookingSuccess ? 'booked' : ''}`}
            onClick={handleBookingClick}
          >
            <div className="rh-cta-icon-circle">
              {bookingSuccess ? <CheckCircle2 size={18} /> : <Plus size={20} />}
            </div>
            <span className="rh-cta-label">
              {bookingSuccess ? 'Booking Inquiry Sent!' : 'Start your trip'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
