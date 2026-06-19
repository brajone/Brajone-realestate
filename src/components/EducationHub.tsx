import React, { useState } from 'react'

const courses = [
  { id: 1, title: '🏠 Real Estate 101', level: 'Beginner', duration: '4 weeks', price: 'Free', students: 2500 },
  { id: 2, title: '💰 Investment Strategies', level: 'Intermediate', duration: '6 weeks', price: '₹2,999', students: 1200 },
  { id: 3, title: '📊 Advanced Analytics', level: 'Advanced', duration: '8 weeks', price: '₹4,999', students: 450 },
  { id: 4, title: '⚖️ Legal & Compliance', level: 'Intermediate', duration: '3 weeks', price: '₹1,999', students: 800 },
  { id: 5, title: '🌍 Global Investment', level: 'Advanced', duration: '10 weeks', price: '₹5,999', students: 200 },
  { id: 6, title: '🔐 Smart Contracts', level: 'Advanced', duration: '6 weeks', price: '₹3,999', students: 300 },
]

export default function EducationHub() {
  const [enrolledCourses, setEnrolledCourses] = useState<number[]>([])

  const handleEnroll = (courseId: number) => {
    if (enrolledCourses.includes(courseId)) {
      setEnrolledCourses(enrolledCourses.filter(id => id !== courseId))
    } else {
      setEnrolledCourses([...enrolledCourses, courseId])
    }
  }

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-brajone-gold/50">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-brajone-gold mb-2">📚 BrajOne Academy</h2>
        <p className="text-gray-400">Master real estate investment with our expert-led courses</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-gray-900 p-6 rounded-lg border border-brajone-gold/30 hover:border-brajone-gold/80 transition">
            <h3 className="text-xl font-bold text-brajone-gold mb-2">{course.title}</h3>
            <div className="space-y-2 text-sm text-gray-400 mb-4">
              <p>📈 {course.level} • ⏱️ {course.duration}</p>
              <p>👥 {course.students.toLocaleString()} students enrolled</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold text-brajone-gold">{course.price}</p>
              <button
                onClick={() => handleEnroll(course.id)}
                className={`px-4 py-2 rounded font-bold transition ${
                  enrolledCourses.includes(course.id)
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-brajone-gold text-black hover:bg-yellow-400'
                }`}
              >
                {enrolledCourses.includes(course.id) ? '✅ Enrolled' : 'Enroll'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
