'use client'

// Modules
import { IM10TestimonialWithMedia } from './types'
import styles from './styles/index.module.scss'
import { ThemeColor } from '@/types/theme'
import { useState } from 'react'
import AppConfig from '@/lib/AppConfig'
import ReactPlayer from 'react-player'

// Components
import AnimateSwipe from '@/components/shared/AnimateSwipe'
import Typography from '@/components/UI/Typography'
import Button from '@/components/UI/Button'
import Container from '@/components/UI/Container'
import Modal from '@/components/UI/Modal'

const M10TestimonialWithMedia = ({
  heading,
  bodyText,
  cta,
  ctaSecondary,
  media,
  theme,
  globalTheme,
  layout = 'video-right',
}: IM10TestimonialWithMedia) => {
  const [isTranscriptOpen, setIsTranscriptOpen] = useState(false)
  const themeName = !!theme ? theme : globalTheme ?? 'leaf'

  const openTranscript = () => setIsTranscriptOpen(true)
  const closeTranscript = () => setIsTranscriptOpen(false)

  const layoutClass = layout === 'video-left' ? styles['video_left'] : styles['video_right']

  return (
    <>
      <Container variant="white">
        <AnimateSwipe>
          <div className={`${styles['m10_testimonial']} ${styles[themeName]} ${layoutClass}`}>
            <div className={styles['m10_container']}>
              {/* Video Player */}
              <div className={styles['m10_media']}>
                <div className={styles['m10_video_container']}>
                  <ReactPlayer
                    url={media.url}
                    width="100%"
                    controls
                    className={styles['m10_video']}
                    config={{
                      vimeo: {
                        playerOptions: {
                          autoplay: false,
                          controls: true,
                          responsive: true,
                          portrait: false,
                          title: false,
                          byline: false,
                          background: false,
                          playsinline: true,
                          dnt: true,
                          keyboard: true,
                          pip: false,
                          speed: true,
                          transparent: false,
                          quality: 'auto',
                        },
                      },
                      youtube: {
                        playerVars: {
                          autoplay: 0,
                          controls: 1,
                          modestbranding: 1,
                          rel: 0,
                        },
                      },
                    }}
                  />

                  {media.transcriptText && (
                    <button
                      onClick={openTranscript}
                      className={styles['m10_transcript_link']}
                      type="button"
                    >
                      Transcript
                    </button>
                  )}
                </div>
              </div>

              {/* Text Content */}
              <div className={styles['m10_content']}>
                <Typography
                  as="h2"
                  color={themeName as ThemeColor}
                  className={styles['m10_heading']}
                >
                  {heading}
                </Typography>

                <div className={styles['m10_body_text']}>{AppConfig.html(bodyText.join(''))}</div>

                {cta && (
                  <div className={styles['m10_cta_container']}>
                    <Button
                      href={cta.url}
                      theme={themeName as ThemeColor}
                      variant="primary"
                      noUnderline
                      isExternal={!!cta.isExternal}
                      className={styles['m10_cta_button']}
                    >
                      {cta.label}
                    </Button>

                    {ctaSecondary && (
                      <Button
                        href={ctaSecondary.url}
                        theme={themeName as ThemeColor}
                        variant="primary"
                        noUnderline
                        isExternal={!!ctaSecondary.isExternal}
                        className={styles['m10_cta_button']}
                      >
                        {ctaSecondary.label}
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </AnimateSwipe>
      </Container>

      {/* Transcript Modal */}
      <Modal
        isOpen={isTranscriptOpen}
        onClose={closeTranscript}
        title="TRANSCRIPT:"
        size="medium"
        theme={themeName}
      >
        <div>
          {media.transcriptText ? (
            <div>{AppConfig.html(media.transcriptText)}</div>
          ) : (
            <p>No transcript available.</p>
          )}
        </div>
      </Modal>
    </>
  )
}

export default M10TestimonialWithMedia
