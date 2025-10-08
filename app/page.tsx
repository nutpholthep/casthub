"use client";
import { Wine, Music2, Tv2, Upload, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Text:", text);
    console.log("File:", file);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="w-full max-w-md p-8 rounded-2xl space-y-6 bg-slate-800/80 backdrop-blur-lg border border-slate-700/50 shadow-2xl shadow-slate-900/40">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
              <Wine className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              BarCast Pro
            </h1>
          </div>
          <p className="text-slate-300 text-sm">
            ระบบจัดการจอแสดงผลสำหรับร้านเหล้าและผับยุคใหม่
          </p>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit}>
        <div className="space-y-5">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-slate-300">
              <MessageSquare className="w-4 h-4" />
              <label htmlFor="text" className="text-sm font-medium">
                ข้อความประกาศ
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="text"
                name="text"
                placeholder="พิมพ์ข้อความที่ต้องการแสดง..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-xl bg-slate-700/50 border border-slate-600/50 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all"
              />
              <span className="absolute left-3 top-3.5 text-slate-400">
                <MessageSquare className="w-4 h-4" />
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-slate-300">
              <Upload className="w-4 h-4" />
              <span className="text-sm font-medium">อัปโหลดไฟล์</span>
            </div>
            <div className="relative">
              <input
                type="file"
                id="picture"
                name="picture"
                accept="image/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="hidden"
              />
              <label
                htmlFor="picture"
                className="block w-full px-4 py-8 rounded-xl bg-slate-700/30 border-2 border-dashed border-slate-600/50 text-center cursor-pointer hover:bg-slate-700/50 transition-colors group"
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="p-2 rounded-lg bg-slate-700/50 group-hover:bg-indigo-500/20 transition-colors">
                    <Upload className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-200">ลากไฟล์มาวางที่นี่</p>
                    <p className="text-xs text-slate-400 mt-1">หรือคลิกเพื่อเลือกไฟล์</p>
                    <p className="text-xs text-slate-500 mt-2">รองรับไฟล์รูปภาพ (JPG, PNG)</p>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98]"
          >
            <Tv2 className="w-5 h-5" />
            <span>ส่งไปยังจอแสดงผล</span>
          </button>
        </div>
      </form>

      {/* Footer */}
      <p className="mt-8 text-sm text-slate-500 text-center">
        © {new Date().getFullYear()} BarCast Pro - ระบบแสดงผลสำหรับธุรกิจร้านเหล้า
      </p>
    </div>
      </div>
  );
}
