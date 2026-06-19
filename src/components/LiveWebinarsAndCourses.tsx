import React, { useState } from 'react'

const courses = [
  {
    id: 1,
    title: 'Smart Contracts & Blockchain',
    instructor: 'Rahul Singh',
    level: 'Advanced',
    duration: '8 weeks',
    students: 450,
    rating: 4.9,
  },
  {
    id: 2,
    title: 'Metaverse Real Estate Investing',
    instructor: 'Priya Gupta',
    level: 'Intermediate',
    duration: '6 weeks',
    students: 320,
    rating: 4.7,
  },
  {
    id: 3,
    title: 'International Property Investment',
    instructor: 'Amit Kumar',
    level: 'Advanced',
    duration: '10 weeks',
    students: 280,
    rating: 4.8,
  },
]

export default function LiveWebinarsAndCourses() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0])

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-brajone-gold/50">
      <h2 className="text-3xl font-bold text-brajone-gold mb-6">🎤 Live Webinars & Courses</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Course List */}
        <div className="md:col-span-1 space-y-3">
          {courses.map((course) => (
            <button
              key={course.id}
              onClick={() => setSelectedCourse(course)}
              className={`w-full p-4 rounded-lg border-2 transition text-left ${
                selectedCourse.id === course.id
                  ? 'border-brajone-gold bg-gray-800'
                  : 'border-gray-600 bg-gray-900 hover:border-brajone-gold/50'
              }`}
            >
              <p className="font-bold text-white mb-1">{course.title}</p>
              <p className="text-xs text-gray-400">{course.duration} • {course.level}</p>
            </button>
          ))}
        </div>

        {/* Course Details */}
        <div className="md:col-span-2 space-y-4">
          <div className="bg-gray-900 p-6 rounded-lg border border-brajone-gold/30">
            <h3 className="text-2xl font-bold text-brajone-gold mb-4">{selectedCourse.title}</h3>
            <div className="space-y-3 mb-6">
              <div>
                <p className="text-gray-400 text-sm">Instructor</p>
                <p className="text-white font-bold">👨‍🏫 {selectedCourse.instructor}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Rating</p>
                <p className="text-yellow-400 font-bold">⭐ {selectedCourse.rating} ({selectedCourse.students} students)</p>
              </div>
            </div>
            <button className="w-full bg-brajone-gold text-black py-3 rounded-lg font-bold hover:bg-yellow-400 transition">
              🎓 Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
