<template>
  <div class="flex items-center justify-between p-4 bg-gray-100 space-x-4">
    <!-- Hamburger Menu for Mobile -->
    <div class="lg:hidden">
      <button @click="toggleMobileMenu" class="text-gray-700 hover:text-gray-900 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>

    <!-- Udemy Logo and Title -->
    <div class="flex items-center space-x-2">
      <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy Logo" class="h-10 w-auto" />
      <span class="sr-only">Udemy</span>
    </div>

    <!-- Search and Cart Icons for Mobile -->
    <div class="flex items-center space-x-4 lg:hidden">
      <button class="text-gray-700 hover:text-gray-900 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2v6m0-6V4m0 0L8 6m4-2l4 2"></path>
        </svg>
      </button>
      <button class="text-gray-700 hover:text-gray-900 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18l-1 9H4L3 3zm0 0l1 9h16l1-9M5 21h14a2 2 0 002-2v-5H3v5a2 2 0 002 2z"></path>
        </svg>
      </button>
    </div>

    <!-- Desktop Navbar -->
    <div class="hidden lg:flex items-center justify-evenly w-full space-x-4">
      <div class="relative" @mouseover="dropdownOpen = true" @mouseleave="dropdownOpen = false">
        <button class="text-gray-700 hover:text-gray-900 font-medium">
          Categories
        </button>
        <div v-if="dropdownOpen" class="absolute bg-white border border-gray-200 rounded shadow-md mt-2 w-72 transition-all duration-300 p-2 z-10">
          <ul class="grid grid-cols-2 gap-2">
            <li v-for="category in categories" :key="category" class="py-1 hover:bg-gray-100 border-r border-gray-200">{{ category }}</li>
          </ul>
        </div>
      </div>

      <div class="relative flex-grow mx-3">
        <input type="text" placeholder="Search for anything" v-model="searchQuery" class="w-full pl-10 pr-4 py-3 border rounded-full border-gray-300 focus:outline-none" />
      </div>

      <div class="flex items-center space-x-6 ml-auto">
        <div class="relative" @mouseover="showBusinessModal = true" @mouseleave="showBusinessModal = false">
          <a href="#" class="text-gray-700 hover:text-gray-900 font-medium">Udemy Business</a>
          <div v-if="showBusinessModal" class="absolute top-12 left-0 bg-white border border-gray-200 rounded shadow-lg p-4 w-72 z-10">
            <p class="text-gray-700">Get your team access to over 27,000 top Udemy courses, anytime, anywhere.</p>
            <a href="#" class="mt-4 inline-block bg-[#1c1d1f] text-white py-2 px-4 rounded-md hover:bg-gray-700">Try Udemy Business</a>
          </div>
        </div>
        <div class="relative" @mouseenter="showTechModal = true" @mouseleave="showTechModal = false">
          <a href="#" class="text-gray-700 hover:text-gray-900 font-medium">Tech on Udemy</a>
          <div v-if="showTechModal" class="absolute top-12 left-0 bg-white border border-gray-200 rounded-none shadow-lg p-4 w-72 z-10">
            <p class="text-gray-700">Turn what you know into an opportunity and reach millions around the world.</p>
            <a href="#" class="mt-4 inline-block bg-[#1c1d1f] text-white py-2 rounded-none items-center justify-center px-4 hover:bg-gray-700">Learn More</a>
          </div>
        </div>
        <a href="#" class="text-gray-700 hover:text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7H20m-2 13a2 2 0 11-4 0 2 2 0 014 0zm-8 0a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </a>
        <a href="#" class="text-gray-700 hover:bg-[#c9c9c7] font-medium px-4 py-2 border-[2px] border-gray-300">Log In</a>
        <a href="#" class="text-white bg-[#1c1d1f] hover:bg-[#c9c9c7] font-medium px-4 py-2">Sign Up</a>
        <div class="flex items-center cursor-pointer" @click="toggleModal">
          <svg aria-label="Choose a language" role="img" focusable="false" class="h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5zm6.9 8.25h-2.427a17.392 17.392 0 00-1.077-4.3 7.228 7.228 0 013.504 4.3zM12 4.54c.633.869 1.187 2.2 1.53 3.71H10.47c.343-1.51.898-2.841 1.53-3.71zM8.14 12c.07-1.36.3-2.662.67-3.76h6.38c.37 1.098.6 2.4.67 3.76H8.14zm.357-5.55a17.392 17.392 0 00-1.077 4.3H5.093a7.228 7.228 0 013.504-4.3zM4.54 12c-.07 1.36-.3 2.662-.67 3.76H2.122a7.228 7.228 0 013.504-4.3zM8.14 15.25c-.343 1.51-.898 2.841-1.53 3.71a7.228 7.228 0 01-3.504-4.3h2.427c.336 1.565.868 2.957 1.607 4.01zm4.86 4.46c-.633-.869-1.187-2.2-1.53-3.71h3.06c-.343 1.51-.898 2.841-1.53 3.71zm3.934-1.12a17.392 17.392 0 001.077-4.3h2.427a7.228 7.228 0 01-3.504 4.3z"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="lg:hidden absolute top-0 left-0 w-full h-full bg-white z-50">
      <div class="flex items-center justify-between p-4 bg-gray-100">
        <div class="flex items-center space-x-2">
          <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy Logo" class="h-10 w-auto" />
          <span class="sr-only">Udemy</span>
        </div>
        <button @click="toggleMobileMenu" class="text-gray-700 hover:text-gray-900 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div class="p-4">
        <ul class="space-y-4">
          <li><a href="#" class="text-gray-700 hover:text-gray-900 font-medium">Categories</a></li>
          <li><a href="#" class="text-gray-700 hover:text-gray-900 font-medium">Udemy Business</a></li>
          <li><a href="#" class="text-gray-700 hover:text-gray-900 font-medium">Tech on Udemy</a></li>
          <li><a href="#" class="text-gray-700 hover:text-gray-900 font-medium">Log In</a></li>
          <li><a href="#" class="text-gray-700 hover:text-gray-900 font-medium">Sign Up</a></li>
          <li><a href="#" class="text-gray-700 hover:text-gray-900 font-medium">Search</a></li>
          <li><a href="#" class="text-gray-700 hover:text-gray-900 font-medium">Cart</a></li>
        </ul>
      </div>
    </div>

    <!-- Language Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" @click.self="toggleModal">
      <div class="bg-white rounded-lg shadow-lg p-6 w-1/2 relative">
        <h2 class="text-lg font-bold mb-4">Choose Language</h2>
        <ul class="grid grid-cols-3 gap-4">
          <li v-for="language in languages" :key="language" class="cursor-pointer hover:bg-gray-100 p-2 rounded text-center" @click="selectLanguage(language)">
            {{ language }}
          </li>
        </ul>
        <button @click="toggleModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-4xl">&times;</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      dropdownOpen: false,
      isModalOpen: false,
      isMobileMenuOpen: false,
      showBusinessModal: false,
      showTechModal: false,
      categories: [
        'Development', 'Business', 'IT & Software', 'Marketing', 'Design',
        'Data Science', 'Personal Development', 'Photography', 'Music',
        'Health & Fitness', 'Teaching & Academics', 'Language', 'Food & Beverage',
        'Video Editing', 'Software Engineering', 'Cyber Security', 'Entrepreneurship',
        'Game Development', 'Sales'
      ],
      languages: ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean', 'Italian', 'Portuguese'],
    };
  },
  methods: {
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    selectLanguage(language) {
      alert(`Selected language: ${language}`);
      this.toggleModal();
    }
  }
};
</script>

