import { dehydrate, QueryClient } from 'react-query'
import { fetchCourseBySlug, fetchCourses, fetchLessonBySlug, useLessonBySlug } from '../../../hooks'
import { useRouter } from 'next/router'

import { NotionRenderer } from 'react-notion'
import "react-notion/src/styles.css";

import { LessonNavigation } from '../../../components/Lesson/lessonNavigation';
import { LessonHeader } from '../../../components/Lesson/lessonHeader';
import { LessonFooter } from '../../../components/Lesson/lessonFooter';

export default function Lesson(props) {
    const router = useRouter()
    const { lesson } = router.query

    const { data } = useLessonBySlug(lesson)

    return <div className='flex md:flex-row flex-col min-h-full max-w-7xl mx-auto px-0 md:px-4 mt-10 relative'>
        <div className='w-full md:w-1/4 sticky px-4 md:px-0'>
            <LessonNavigation nav={props?.nav} lessonSlug={lesson} />
        </div>
        <div className='flex flex-col flex-1 w-full md:w-3/4'>

            <LessonHeader nav={props?.nav} title={data?.title} prev={props?.prev} next={props?.next} />
            {
                data && data.notionContent &&
                <article className='bg-white py-4 md:px-6 px-4'>
                    <NotionRenderer blockMap={data?.notionContent} />
                </article>
            }
            <LessonFooter nav={props?.nav} title={data?.title} prev={props?.prev} next={props?.next} />
        </div>
    </div>
}

export async function getStaticPaths() {
    const courses = await fetchCourses(null)

    const routes = []

    courses.forEach(course => {
        course.chapters.forEach(chapter => {
            chapter.lessons.forEach(lesson => {
                routes.push({ params: { slug: course.slug, lesson: lesson.slug } })
            })
        })
    })

    return {
        paths: routes,
        fallback: true,
    }
}

export async function getStaticProps({ params }) {
    const queryClient = new QueryClient()

    const course = await fetchCourseBySlug(params.slug)
    await queryClient.prefetchQuery([`lessons/${params.lesson}`, params.lesson], () => fetchLessonBySlug(params.lesson))

    let current = {}
    let prev = {}
    let next = {}

    const nav = {
        course: {
            title: course.title,
            slug: course.slug
        },
        chapters: course.chapters.map((chapter, chapterIndex) => ({
            title: chapter.title,
            lessons: chapter.lessons.map((lesson, i) => {

                if (lesson.slug === params.lesson) {
                    current = lesson

                    if (chapter.lessons[i - 1]) {
                        prev = {
                            title: chapter.lessons[i - 1].title,
                            slug: chapter.lessons[i - 1].slug
                        }
                    } else if (course.chapters[chapterIndex - 1]) {
                        prev = {
                            title: course.chapters[chapterIndex - 1]?.lessons[course.chapters[chapterIndex - 1]?.lessons.length - 1]?.title,
                            slug: course.chapters[chapterIndex - 1]?.lessons[course.chapters[chapterIndex - 1]?.lessons.length - 1]?.slug
                        }
                    } else {
                        prev = null
                    }

                    if (chapter.lessons[i + 1]) {
                        next = {
                            title: chapter.lessons[i + 1].title,
                            slug: chapter.lessons[i + 1].slug
                        }
                    } else if (course.chapters[chapterIndex + 1]) {
                        next = {
                            title: course.chapters[chapterIndex + 1].lessons[0].title,
                            slug: course.chapters[chapterIndex + 1].lessons[0].slug
                        }
                    } else {
                        next = null
                    }
                }

                return {
                    title: lesson.title,
                    slug: lesson.slug
                }
            })
        }))
    }

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            nav,
            current,
            prev,
            next
        },
    }
}