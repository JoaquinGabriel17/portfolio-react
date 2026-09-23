import styles from "./Footer.module.css";
import github from '@/../public/github.svg';
import linkedin from '@/../public/linkedin.svg';
import wasap from '@/../public/whatsapp-brands.svg';
import email from '@/../public/email.svg';

export default function Footer() {
  const socialLinks = [
    { 
      src: linkedin.src, 
      href: 'https://www.linkedin.com/in/joaquin-ocampo-taboada-a7b213252/?locale=es-ES',
      alt: 'LinkedIn'
    },
    { 
      src: github.src, 
      href: 'https://github.com/JoaquinGabriel17',
      alt: 'GitHub'
    },
    { 
      src: email.src, 
      href: 'mailto:joaquingabriel3@hotmail.com',
      alt: 'Email'
    },
    { 
      src: wasap.src, 
      href: 'https://wa.me/5493876567092', // Formato correcto para WhatsApp
      alt: 'WhatsApp'
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Lado Izquierdo */}
        <div className={styles.info}>
          <span>Joaquín Ocampo Taboada</span>
          <span>Salta, Argentina</span>
        </div>

        {/* Lado Derecho */}
        <div className={styles.socialIcons}>
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.iconLink}
              aria-label={social.alt}
            >
              <img 
                src={social.src} 
                alt={social.alt} 
                className={styles.icon} 
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}