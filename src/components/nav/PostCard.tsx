import React from 'react'
import Link from 'components/Link'
import { Box, Flex, Heading, theme } from '@containous/faency'
import ArrowLink from './ArrowLink'
import styled from 'styled-components'

const CustomArrowLink = ArrowLink as any
const CustomImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 162px;
  layout: fill;
`

type MenuPostCard = {
  post: {
    id: string
    title: string
    slug: string
    featured: boolean
    feature_image: string
    excerpt: string
    custom_excerpt: string
    visibility: string
    published_at: string
    published_at_pretty: string
    primary_tag: {
      slug: string
      name: string
      visibility: string
      feature_image: string
      description: string
      meta_title: string
      meta_description: string
    }
  }
}

const PostCard: React.FC<MenuPostCard> = ({ post }) => {
  return (
    <Box sx={{ backgroundColor: '#f4f5f6', minHeight: '280px', borderRadius: '8px', overflow: 'hidden' }}>
      <Link
        style={{ textDecoration: 'none' }}
        href={`https://traefik.io/${post.primary_tag.slug}/${post.slug}/`}
        target="_self"
      >
        <Box sx={{ height: '162px', position: 'relative' }}>
          {post?.feature_image && <CustomImage src={post.feature_image} alt={post.title} />}
        </Box>
        <Flex sx={{ p: '16px', flexDirection: 'column' }}>
          <Heading
            as="p"
            sx={{
              mb: '16px',
              fontSize: '18px',
              lineHeight: 1.33,
              letterSpacing: 'normal',
              color: theme.colors.dark,
              fontFamily: 'inherit',
              fontWeight: 500,
            }}
          >
            {post.title}
          </Heading>
          <CustomArrowLink as="div" icon="arrow" color={theme.colors.dark} sx={{ boxShadow: 'none' }}>
            Read more
          </CustomArrowLink>
        </Flex>
      </Link>
    </Box>
  )
}

export default PostCard
