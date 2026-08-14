import style from './styles/index.module.scss'
import { IFooter } from './types'
import Typography from '@/components/UI/Typography'
import Anchor from '@/components/shared/Anchor'
import Button from '@/components/UI/Button'
import ResponsiveImage from '@/components/ResponsiveImage'

const EMFooter = ({
  mainLinks,
  subLinks,
  imageLinks,
  socialLinks,
  privacyLink,
  contactLink,
}: IFooter) => {
  const getMainLinks = () => {
    return mainLinks?.map((links, key) => (
      <ul key={`footer-main-${key}`}>
        {links?.map((link, i) => {
          if (i === 0) {
            return (
              <li key={i}>
                <Anchor href={link.url}>
                  <Typography className={style.link} as="span" fontSize="lg" color="leaf" bold>
                    {link.label}
                  </Typography>
                </Anchor>
              </li>
            )
          }

          return (
            <li key={i}>
              <Anchor href={link.url}>
                <Typography as="span" fontSize="md" bold muted>
                  {link.label}
                </Typography>
              </Anchor>
            </li>
          )
        })}
      </ul>
    ))
  }

  const getContactLink = () => {
    return (
      contactLink?.url && (
        <Button href={contactLink?.url} className={style.btn} animate mobile>
          {contactLink?.label}
        </Button>
      )
    )
  }

  const getSocialLinks = () => {
    return socialLinks?.map((social, i) => (
      <Anchor href={social?.cta?.url || '#'} key={`footer-social-${i}`}>
        <img src={social.image} alt={social?.altText} />
      </Anchor>
    ))
  }

  const getImageLinks = () => {
    return (
      <nav className={style.row} aria-label="footer image nav">
        {imageLinks?.map((link, i) => (
          <Anchor href={link?.cta?.url || '#'} key={`footer-image-${i}`}>
            <ResponsiveImage
              desktop={link?.image?.desktop}
              mobile={link?.image?.mobile}
              classNames={i === 0 ? style.logo : style.lockup}
            />
          </Anchor>
        ))}
      </nav>
    )
  }

  const getSubLinks = () => {
    return (
      <nav className={style.row} aria-label="footer sub nav">
        <ul>
          {subLinks?.map(link => (
            <li key={link.label}>
              <Anchor href={link.url}>
                <Typography as="span" fontSize="sm" bold muted>
                  {link.label}
                </Typography>
              </Anchor>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  const getPrivacyLink = () => {
    return (
      privacyLink?.cta?.url && (
        <nav className={style.row} aria-label="footer privacy nav">
          <ul>
            <li>
              <Anchor id="clarip-do-not-sell-link" href={privacyLink?.cta?.url}>
                <Typography as="span" fontSize="sm" bold muted>
                  {privacyLink?.cta?.label}
                </Typography>
                <img className={style.privacy} src={privacyLink?.image} alt="Privacy options" />
              </Anchor>
            </li>
          </ul>
        </nav>
      )
    )
  }

  return (
    <footer className={style.footer}>
      <div className={style.main}>
        <div className={style.container}>
          <div className={style.column1}>
            <nav className={style.nav} aria-label="footer navigation">
              {getMainLinks()}
            </nav>
          </div>
          <div className={style.column2}>
            {getContactLink()}
            <nav className={style.social} aria-label="footer social nav">
              {getSocialLinks()}
            </nav>
          </div>
        </div>
      </div>
      <div className={style.sub}>
        <div className={style.container}>
          {getImageLinks()}
          {getSubLinks()}
          {getPrivacyLink()}
        </div>
      </div>
    </footer>
  )
}

export default EMFooter
