import React, { useState } from 'react';
import {
    Download, Menu, Shield, Upload, X, ShieldAlert,
    XCircle, FileText, Newspaper, ArrowRight, BookOpen,
    Users, CheckCircle, Calendar, Mail, ChevronRight
} from 'lucide-react';

const App = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [heroImage, setHeroImage] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [news, setNews] = useState([
        {
            id: 1,
            title: "Lanzamiento O!SanSi 2025",
            content: "Nos complace anunciar el inicio de las actividades para la Olimpiada Científica Nacional San Simón 2025. Prepárate para participar en las diferentes áreas y demostrar tu talento.",
            image: null,
            date: "12 Mayo, 2025"
        },
        {
            id: 2,
            title: "Inscripciones abiertas en todas las áreas",
            content: "Las inscripciones para la Olimpiada O!SanSi 2025 ya están disponibles. Matemática, Física, Química, Biología, Astronomía e Informática esperan por ti.",
            image: null,
            date: "15 Mayo, 2025"
        },
        {
            id: 3,
            title: "Etapa Clasificatoria: 31 de Mayo",
            content: "La primera etapa clasificatoria se realizará de forma presencial en el Campus de la UMSS. Confirma tu asistencia y prepárate.",
            image: null,
            date: "20 Mayo, 2025"
        }
    ]);

    const [newNewsForm, setNewNewsForm] = useState({ title: '', content: '', image: null });
    const [formOpen, setFormOpen] = useState(false);
    const [formError, setFormError] = useState('');

    const handleNewsImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) setNewNewsForm({ ...newNewsForm, image: URL.createObjectURL(file) });
    };

    const addNews = () => {
        if (!newNewsForm.title.trim()) { setFormError('El título es obligatorio.'); return; }
        if (!newNewsForm.content.trim()) { setFormError('El contenido es obligatorio.'); return; }
        const today = new Date();
        const dateStr = today.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
        setNews([{ id: Date.now(), ...newNewsForm, date: dateStr }, ...news]);
        setNewNewsForm({ title: '', content: '', image: null });
        setFormError('');
        setFormOpen(false);
    };

    const removeNews = (id) => setNews(news.filter(n => n.id !== id));

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) setHeroImage(URL.createObjectURL(file));
    };

    const removeImage = () => setHeroImage(null);

    const infoData = [
        {
            icon: <BookOpen size={22} />,
            title: "Presentación",
            content: (
                <p>
                    El Comité de la Olimpiadas Científica Nacional San Simón O! SANSI, a través de la Facultad de Ciencias y Tecnología de la Universidad Mayor de San Simón, convoca a los estudiantes del Sistema de Educación Regular a participar en las Olimpiadas O! SANSI 2025.
                </p>
            )
        },
        {
            icon: <Users size={22} />,
            title: "Participantes",
            content: (
                <>
                    <p>Estudiantes del Subsistema de Educación Regular en las áreas de: Matemática, Física, Química, Biología, Astronomía, e Informática.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.75rem' }}>
                        {['Astronomía-Astrofísica', 'Biología', 'Física', 'Informática', 'Matemática', 'Química'].map(area => (
                            <a key={area} href="#" className="download-link"><FileText size={15} /> {area}</a>
                        ))}
                    </div>
                </>
            )
        },
        {
            icon: <CheckCircle size={22} />,
            title: "Requisitos",
            content: (
                <ol style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <li>Ser estudiante del Sistema de Educación Regular del Estado Plurinacional de Bolivia.</li>
                    <li>Registrar un tutor o profesor.</li>
                    <li>Inscribirse en el formulario para el área que se postula.</li>
                    <li>Cumplir los requisitos específicos de la categoría.</li>
                    <li>Presentar documento de identificación personal vigente.</li>
                    <li>Contar con correo electrónico personal o del tutor.</li>
                </ol>
            )
        },
        {
            icon: <Calendar size={22} />,
            title: "Fechas Importantes",
            content: (
                <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <li><strong>Etapa Clasificatoria:</strong> Presencial el 31 de Mayo en el Campus de la UMSS.</li>
                    <li><strong>Etapa Final:</strong> Presencial el 11 de Julio en el Campus de la UMSS. Se conocerán los ganadores departamentales y nacionales.</li>
                </ul>
            )
        },
        {
            icon: <Mail size={22} />,
            title: "Contacto por Área",
            content: (
                <div style={{ overflowX: 'auto' }}>
                    <table className="info-table">
                        <thead>
                            <tr>
                                <th>Área</th>
                                <th>Contacto</th>
                                <th>Correo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { area: 'Astronomía y Astrofísica', name: 'Juan Carlos Terrazas', email: 'juan.terrazas@fcyt.umss.edu.bo' },
                                { area: 'Biología', name: 'Erika Fernández', email: 'e.fernandez@umss.edu' },
                                { area: 'Física', name: 'Marko Andrade', email: 'markoandrade.u@fcyt.umss.edu.bo' },
                                { area: 'Informática', name: 'Vladimir Costas', email: 'vladimircostas.j@fcyt.umss.edu.bo' },
                                { area: 'Matemática', name: 'Vidal Matias', email: 'v.matias@umss.edu' },
                                { area: 'Química', name: 'Boris Moreira', email: 'borismoreira.r@fcyt.umss.edu.bo' },
                            ].map(row => (
                                <tr key={row.area}>
                                    <td>{row.area}</td>
                                    <td>{row.name}</td>
                                    <td><a href={`mailto:${row.email}`} className="email-link">{row.email}</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )
        }
    ];

    return (
        <div className="app-container">

            <nav className="navbar">
                <div className="navbar-brand">
                    <ShieldAlert size={26} color="#90b4f5" />
                    <span>O!SanSi</span>
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>

                <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                    <a href="#inicio">Inicio</a>
                    <a href="#noticias">Noticias</a>
                    <a href="#olimpiadas">Olimpiadas</a>
                    <button
                        className="admin-toggle"
                        onClick={() => setIsAdmin(!isAdmin)}
                        style={isAdmin ? { background: 'linear-gradient(135deg, #ef4444, #dc2626)' } : {}}
                    >
                        <Shield size={16} />
                        {isAdmin ? 'Salir Admin' : 'Modo Admin'}
                    </button>
                </div>
            </nav>

            <section id="inicio" className="hero">
                {heroImage && (
                    <div className="hero-img-container">
                        <img src={heroImage} alt="Hero Background" className="hero-img" />
                    </div>
                )}

                {isAdmin && (
                    <div className="admin-controls">
                        <p style={{ fontSize: '0.78rem', fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: '0.4rem' }}>
                            Controles Admin
                        </p>
                        <div className="upload-btn-wrapper">
                            <button className="btn-upload"><Upload size={16} /> Subir Imagen</button>
                            <input type="file" accept="image/*" onChange={handleImageUpload} />
                        </div>
                        {heroImage && (
                            <button className="btn-danger" onClick={removeImage}>
                                <XCircle size={16} /> Quitar Imagen
                            </button>
                        )}
                    </div>
                )}

                <div className="hero-content">
                    <div className="hero-badge">
                        <Newspaper size={13} /> Olimpiada 2025
                    </div>
                    <h1>
                        OLIMPIADA CIENTÍFICA<br />
                        <span>NACIONAL SAN SIMÓN</span>
                    </h1>
                    <p>
                        Demuestra tus habilidades y conocimientos en el evento académico más importante del año.
                        {(!heroImage && isAdmin) && (
                            <span style={{ color: '#90b4f5', fontWeight: 600, fontSize: '0.85rem', marginTop: '0.75rem', display: 'block' }}>
                                ↑ Modo Texto — Sube una imagen para fondo
                            </span>
                        )}
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button className="btn-primary">
                            <Download size={18} /> Convocatoria O!SanSi
                        </button>
                        <button className="btn-secondary">
                            Ver Olimpiadas <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Star Bar*/}
            <div className="stats-bar">
                <div className="stat-item">
                    <span className="stat-number">6</span>
                    <span className="stat-label">Áreas</span>
                </div>
                <div className="stat-divider" />
                <div className="stat-item">
                    <span className="stat-number">2</span>
                    <span className="stat-label">Etapas</span>
                </div>
                <div className="stat-divider" />
                <div className="stat-item">
                    <span className="stat-number">31 May</span>
                    <span className="stat-label">Clasificatoria</span>
                </div>
                <div className="stat-divider" />
                <div className="stat-item">
                    <span className="stat-number">11 Jul</span>
                    <span className="stat-label">Final</span>
                </div>
            </div>

            {/* News Wall*/}
            <section id="noticias" className="news-section">
                <div className="section-header">
                    <span className="section-title-accent" />
                    <h2 className="section-title">Muro de Noticias</h2>
                    <div className="section-line" />
                </div>

                {/* Floating button for admin */}
                {isAdmin && (
                    <button
                        className="fab-add-news"
                        onClick={() => { setFormOpen(f => !f); setFormError(''); }}
                    >
                        {formOpen ? <X size={22} /> : <><Upload size={18} /><span>Nueva Noticia</span></>}
                    </button>
                )}

                {isAdmin && formOpen && (
                    <div className="admin-news-form">
                        <div className="admin-form-header">
                            <h3>✏️ Agregar Nueva Noticia al Muro</h3>
                            <button className="btn-danger" style={{ padding: '0.35rem 0.75rem', fontSize: '0.85rem' }}
                                onClick={() => { setFormOpen(false); setFormError(''); }}>
                                <X size={15} /> Cerrar
                            </button>
                        </div>
                        <div className="admin-form-body">
                            {/* LEFT: fields */}
                            <div className="admin-form-fields">
                                <label className="form-label">Título <span style={{ color: '#ef4444' }}>*</span></label>
                                <input
                                    type="text"
                                    placeholder="Ej: Lanzamiento de convocatoria 2025"
                                    value={newNewsForm.title}
                                    onChange={(e) => { setNewNewsForm({ ...newNewsForm, title: e.target.value }); setFormError(''); }}
                                />

                                <label className="form-label" style={{ marginTop: '0.75rem' }}>Contenido <span style={{ color: '#ef4444' }}>*</span></label>
                                <textarea
                                    placeholder="Escribe aquí el cuerpo de la noticia..."
                                    value={newNewsForm.content}
                                    onChange={(e) => { setNewNewsForm({ ...newNewsForm, content: e.target.value }); setFormError(''); }}
                                    style={{ minHeight: '140px', resize: 'vertical' }}
                                />

                                <label className="form-label" style={{ marginTop: '0.75rem' }}>Imagen (opcional)</label>
                                <div className="image-upload-area">
                                    <div className="upload-btn-wrapper">
                                        <button className="btn-upload"><Upload size={16} /> Seleccionar imagen</button>
                                        <input type="file" accept="image/*" onChange={handleNewsImageUpload} />
                                    </div>
                                    {newNewsForm.image && (
                                        <button className="btn-danger" style={{ padding: '0.4rem 0.9rem', fontSize: '0.85rem' }}
                                            onClick={() => setNewNewsForm({ ...newNewsForm, image: null })}>
                                            <XCircle size={15} /> Quitar imagen
                                        </button>
                                    )}
                                </div>

                                {formError && (
                                    <p className="form-error"><XCircle size={15} /> {formError}</p>
                                )}

                                <button onClick={addNews} className="btn-primary" style={{ marginTop: '1.25rem', width: '100%', justifyContent: 'center' }}>
                                    <Newspaper size={18} /> Publicar en el Muro
                                </button>
                            </div>

                            {/* RIGHT: live preview */}
                            <div className="admin-form-preview">
                                <p className="preview-label">Vista previa</p>
                                <div className="preview-card">
                                    {newNewsForm.image
                                        ? <img src={newNewsForm.image} alt="preview" className="preview-img" />
                                        : <div className="preview-img-placeholder"><Newspaper size={36} /></div>
                                    }
                                    <div className="preview-card-body">
                                        <div className="news-meta">
                                            <span className="news-tag" style={{ background: 'var(--navy)' }}>Noticia</span>
                                            <span className="news-date">Hoy</span>
                                        </div>
                                        <h3 className="news-card-title" style={{ fontSize: '1.05rem' }}>
                                            {newNewsForm.title || <span style={{ color: '#aaa' }}>Título de la noticia...</span>}
                                        </h3>
                                        <p className="news-card-text" style={{ fontSize: '0.9rem', WebkitLineClamp: 3, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                            {newNewsForm.content || <span style={{ color: '#aaa' }}>El contenido aparecerá aquí...</span>}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="news-wall">
                    {news.length === 0 && (
                        <div className="news-card-empty">
                            <Newspaper size={40} style={{ color: '#d1d5db', marginBottom: '0.75rem' }} />
                            <p>No hay noticias disponibles en este momento.</p>
                        </div>
                    )}
                    {news.map(item => (
                        <div key={item.id} className="news-card">
                            {item.image && (
                                <img src={item.image} alt={item.title} className="news-card-image" />
                            )}
                            <div className="news-card-body">
                                <div className="news-meta">
                                    <span className="news-tag">Noticia</span>
                                    <span className="news-date">{item.date}</span>
                                </div>
                                <h3 className="news-card-title">{item.title}</h3>
                                <p className="news-card-text">{item.content}</p>
                            </div>
                            <div className="news-card-footer">
                                <span className="read-more">Leer más <ArrowRight size={14} /></span>
                                {isAdmin && (
                                    <button onClick={() => removeNews(item.id)} className="btn-danger"
                                        style={{ padding: '0.3rem 0.7rem', fontSize: '0.8rem' }}>
                                        <XCircle size={14} /> Eliminar
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Info Section */}
            <main id="olimpiadas" className="main-content">
                <div className="section-header" style={{ maxWidth: '1100px', width: '100%' }}>
                    <span className="section-title-accent" />
                    <h2 className="section-title">Información de las Olimpiadas</h2>
                    <div className="section-line" />
                </div>
                <div className="cards-container">
                    {infoData.map((item, index) => (
                        <div key={index} className="info-card">
                            <div className="card-icon-wrap">{item.icon}</div>
                            <h3 className="card-title">{item.title}</h3>
                            <div className="card-content">{item.content}</div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <ShieldAlert size={28} color="#6495ED" style={{ marginBottom: '0.75rem' }} />
                <p>© 2025 Olimpiada Científica Nacional San Simón. Todos los derechos reservados.</p>
                <p className="footer-sub">Facultad de Ciencias y Tecnología — Universidad Mayor de San Simón</p>
            </footer>
        </div>
    );
};

export default App;
