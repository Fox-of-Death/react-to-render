import React from 'react'

const About = () => {
    return (
        <>
            <main className="flex-grow bg-gradient-to-b from-yellow-50 to-orange-100">
                <div className="max-w-2xl mx-auto text-center py-20 px-4 rounded-xl shadow-lg bg-white/80">
                    <img
                        src="https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg"
                        alt="น่ารักของแมว"
                        className="mx-auto mb-6 w-32 h-32 object-cover rounded-full shadow-md border-4 border-orange-200"
                    />
                    <h1 className="text-4xl font-extrabold mb-4 text-orange-700 drop-shadow">เกี่ยวกับเว็บไซต์นี้</h1>
                    <p className="text-lg text-gray-700 mb-6">
                        เว็บไซต์นี้สร้างขึ้นเพื่อแบ่งปันข้อมูล ความรู้ และความน่ารักของแมว ไม่ว่าจะเป็นสายพันธุ์แมว การดูแลสุขภาพ เทคนิคการเลี้ยง หรือเรื่องราวน่ารัก ๆ ของเจ้าเหมียว เหมาะสำหรับคนรักแมวทุกคน!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        <span className="bg-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold shadow">สายพันธุ์แมว</span>
                        <span className="bg-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold shadow">สุขภาพแมว</span>
                        <span className="bg-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold shadow">เทคนิคการเลี้ยง</span>
                        <span className="bg-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold shadow">เรื่องราวน่ารัก</span>
                    </div>
                </div>
            </main>
        </>
    )
}
export default About