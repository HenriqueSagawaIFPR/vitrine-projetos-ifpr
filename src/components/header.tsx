"use client"
import Image from "next/image"

import { GraduationCap, Code, Users, Trophy, Star, BookOpen } from "lucide-react"
import React from "react"

export function Header() {
  return (
    <header className="relative bg-gradient-to-br from-green-50 to-green-100 overflow-hidden min-h-[600px]">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Large organic shape - top right */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-green-500 to-green-600 rounded-full opacity-20 blur-3xl"></div>

        {/* Medium organic shape - bottom left */}
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-green-400 to-emerald-500 rounded-full opacity-15 blur-2xl"></div>

        {/* Small accent shape */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full opacity-25 blur-xl"></div>

        {/* Dot pattern */}
        <div className="absolute top-20 left-20 grid grid-cols-3 gap-2 opacity-30">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-green-500 rounded-full"></div>
          ))}
        </div>

        <div className="absolute bottom-32 right-32 grid grid-cols-4 gap-1 opacity-20">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-green-600 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Left content */}
          <div className="space-y-8">
            {/* Logo e saudação */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-600 p-3 rounded-2xl shadow-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <span className="text-green-700 font-medium text-lg">Olá, visitante!</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 text-balance leading-tight">
                <span className="text-green-600">IFPR</span> ESTÁ AQUI PARA{" "}
                <span className="text-green-600">INSPIRAR</span> O FUTURO
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                Descubra os projetos inovadores desenvolvidos pelos nossos estudantes dos cursos técnicos em Informática
                para Internet.
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="#projetos"
              onClick={(e) => {
                e.preventDefault()
                const section = document.getElementById("projetos")
                section?.scrollIntoView({ behavior: "smooth", block: "start" })
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Explorar Projetos
            </a>
          </div>

          {/* Right visual area */}
          <div className="relative">
            {/* Main visual container */}
            <div className="relative">
              {/* Central decorative element */}
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full opacity-90 shadow-2xl"></div>
                <div className="absolute inset-4 bg-gradient-to-tr from-green-400 to-green-500 rounded-full opacity-80"></div>

                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full border border-white/30 w-50 h-50 flex items-center justify-center">
                    <Image src="/logo-if.png" alt="IFPR" width={100} height={100} />
                  </div>
                </div>
              </div>

              {/* Floating stats cards */}
              {/* Projects count card */}
              <div className="absolute -top-4 -left-8 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <BookOpen className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">6+</div>
                    <div className="text-sm text-gray-600">Projetos</div>
                  </div>
                </div>
              </div>

              {/* Rating card */}
              <div className="absolute -top-8 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-xl font-bold text-gray-900">4.9</span>
                </div>
                <div className="text-sm text-gray-600">Qualidade</div>
              </div>

              {/* Students card */}
              <div className="absolute -bottom-6 -right-8 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <Users className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">Estudantes</div>
                    <div className="text-sm text-gray-600">IIW 2023/2024</div>
                  </div>
                </div>
              </div>

              {/* Innovation badge */}
              <div className="absolute -bottom-4 -left-6 bg-green-700 text-white rounded-2xl p-3 shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  <span className="font-semibold">100% Inovação</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
