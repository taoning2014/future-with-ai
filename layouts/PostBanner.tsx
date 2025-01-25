import { ReactNode } from 'react'
import Bleed from 'pliny/ui/Bleed'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import LoadCanvasConfetti from '@/components/LoadCanvasConfetti'

interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export default function PostMinimal({ content, children }: LayoutProps) {
  const { slug, title } = content

  return (
    <SectionContainer>
      <LoadCanvasConfetti />
      <ScrollTopAndComment />
      <article>
        <div>
          <div className="space-y-1 pb-10 text-center">
            <div className="w-full">
              <Bleed>
                <figure>
                  <div className="relative w-full overflow-hidden rounded-xl pb-[56.25%]">
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800">
                      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-transparent"></div>
                    </div>
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="absolute inset-0 h-full w-full object-cover"
                    >
                      <source src="/static/videos/banner-1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <figcaption>Sample video from Artlist.io</figcaption>
                </figure>
              </Bleed>
            </div>
            <div className="relative pt-10">
              <PageTitle>{title}</PageTitle>
            </div>
          </div>
          <div className="prose max-w-none py-4 dark:prose-invert">{children}</div>
          {siteMetadata.comments && (
            <div className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300" id="comment">
              <Comments slug={slug} />
            </div>
          )}
        </div>
      </article>
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </SectionContainer>
  )
}
