const highlights = [
  {
    title: 'Thiết kế rõ ràng',
    description: 'Bố cục hiện đại, dễ đọc, ưu tiên trải nghiệm và chuyển động tinh tế.',
  },
  {
    title: 'Responsive',
    description: 'Tự động thích nghi từ mobile đến màn hình lớn mà không vỡ layout.',
  },
  {
    title: 'Dễ mở rộng',
    description: 'Cấu trúc component gọn, thuận tiện để thêm trang, form hoặc dashboard.',
  },
]

const stats = [
  { value: '98%', label: 'Tốc độ hiển thị' },
  { value: '24/7', label: 'Trải nghiệm mượt' },
  { value: '3', label: 'Khối nội dung chính' },
]

const steps = [
  'Khởi tạo Vite + React để có tốc độ phát triển nhanh.',
  'Tạo giao diện landing page hiện đại, dùng được ngay.',
  'Tách style, component và dữ liệu để dễ chỉnh sửa.',
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">N</span>
          <div>
            <p className="brand-name">Nova Studio</p>
            <p className="brand-tag">Frontend thuần túy</p>
          </div>
        </div>

        <nav className="nav">
          <a href="#gioi-thieu">Giới thiệu</a>
          <a href="#tinh-nang">Tính năng</a>
          <a href="#lien-he">Liên hệ</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">React + Vite + HTML + CSS + JS</span>
            <h1>Giao diện web hiện đại, gọn gàng và sẵn sàng mở rộng.</h1>
            <p className="lead">
              Một landing page có phong cách đậm, hiệu ứng nhẹ và bố cục linh hoạt để
              bạn dùng làm nền cho website giới thiệu, sản phẩm, portfolio hoặc dashboard.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#lien-he">
                Bắt đầu ngay
              </a>
              <a className="button button-secondary" href="#tinh-nang">
                Xem tính năng
              </a>
            </div>

            <div className="stats" aria-label="Chỉ số nổi bật">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel" aria-hidden="true">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="glass-card preview-card">
              <p className="preview-kicker">Preview</p>
              <h2>Dashboard sáng, nổi bật, dễ đọc</h2>
              <div className="mini-metrics">
                <div>
                  <span>Traffic</span>
                  <strong>12.4K</strong>
                </div>
                <div>
                  <span>Conversion</span>
                  <strong>4.8%</strong>
                </div>
                <div>
                  <span>Growth</span>
                  <strong>+28%</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-grid" id="gioi-thieu">
          <article className="glass-card intro-card">
            <p className="section-label">Giới thiệu</p>
            <h2>Giao diện tập trung vào nội dung, không rối mắt.</h2>
            <p>
              Tông màu tối ấm, điểm nhấn cam và các khối kính mờ giúp tổng thể trông
              hiện đại mà vẫn dễ đọc trên mọi thiết bị.
            </p>
          </article>

          <article className="glass-card checklist-card">
            <p className="section-label">Lộ trình</p>
            <ul>
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="features" id="tinh-nang">
          {highlights.map((item) => (
            <article key={item.title} className="feature-card">
              <span className="feature-dot" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </section>

        <section className="cta" id="lien-he">
          <div>
            <p className="section-label">Sẵn sàng</p>
            <h2>Bạn có thể dùng ngay làm trang chủ cho dự án của mình.</h2>
          </div>
          <a className="button button-primary" href="mailto:hello@example.com">
            Liên hệ chỉnh sửa
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
