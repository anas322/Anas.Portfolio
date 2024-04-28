<template>
    <div
        class="flex flex-col gap-y-6 fixed right-12 top-1/2 -translate-y-1/2 px-3 py-8 border border-light-gray rounded-full"
    >
        <!-- home -->
        <div class="group relative">
            <svg
                class="text-light-gray hover:text-dark-green fill-current transition-colors duration-300 cursor-pointer"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
            >
                <path
                    d="M13 23l-9.983-.014v-9.979l8.974-7.995c1.124.999 2.25 1.998 3.378 2.998l2.255 1.999c1.127.999 2.252 1.992 3.376 2.991v10l-5.993-.014-.007-4.986h-2v5zm6-2l.019-7.121-7.028-6.193-6.991 6.218v7.096h6v-5h6v5h2zm-10-5v3h-2v-3h2zm3-15l12 10.654-1.328 1.494-10.672-9.488-10.672 9.488-1.328-1.494 12-10.654z"
                />
            </svg>
            <span
                class="absolute top-0 right-12 w-max scale-0 rounded bg-light-gray p-2 text-xs text-white group-hover:scale-100 transition-all"
                >✨ Home
                <span
                    class="w-1 h-1 inline-block absolute top-1/2 -translate-y-1/2 right-0 border-8 border-light-gray border-t-transparent border-b-transparent border-r-transparent translate-x-3.5"
                ></span
            ></span>
        </div>

        <!-- about -->
        <div class="group relative">
            <svg
                class="text-light-gray hover:text-dark-green fill-current transition-colors duration-300 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
            >
                <path
                    d="M16.5 12.5c0 .828-.56 1.5-1.25 1.5s-1.25-.672-1.25-1.5.56-1.5 1.25-1.5 1.25.672 1.25 1.5zm-7.75-1.5c-.69 0-1.25.672-1.25 1.5s.56 1.5 1.25 1.5 1.25-.672 1.25-1.5-.56-1.5-1.25-1.5zm3.25 5.357c-2.375-1.454-1.689 2.095-5 .639.5 2.012 3.506 2.353 5 1.141 1.494 1.212 4.5.871 5-1.141-3.311 1.457-2.625-2.092-5-.639zm12-3.044c0 1.765-.985 3.991-3.139 4.906-2.05 3.274-4.975 5.781-8.861 5.781-3.749 0-6.858-2.582-8.862-5.781-2.153-.916-3.138-3.142-3.138-4.906 0-1.995.811-3.774 2.683-3.959l.03-.028.003-.02c-.25-1.945-.338-4.92.719-6.047.568-.605 1.217-.839 2.047-.565 1.294-1.765 3.454-2.694 6.372-2.694 4.646 0 6.552 2.417 8.177 4.46.893 1.123 1.969 2.248 3.969 2.186-.809.758-1.779 1.354-2.832 1.795.051.301.093.604.122.907 1.85.165 2.71 1.905 2.71 3.965zm-2.58-1.866c-.235-.153-.53-.116-.671-.053-.66.293-1.406-.192-1.406-.914 0-.479-.035-.957-.1-1.43-4.099.928-8.743-.231-10.368-3.467-2.375.375-3.85 2.356-4.229 5.021h-.004c-.087.683-.785 1.059-1.39.79-.141-.062-.436-.1-.672.053-1 .651-.893 4.184 1.554 5.012.224.076.413.228.535.43 1.708 2.829 4.015 5.111 7.331 5.111 3.318 0 5.624-2.284 7.331-5.111.123-.202.313-.354.536-.43 2.448-.829 2.553-4.364 1.553-5.012z"
                />
            </svg>
            <span
                class="absolute top-0 right-12 w-max scale-0 rounded bg-light-gray p-2 text-xs text-white group-hover:scale-100 transition-all"
                >✨ About
                <span
                    class="w-1 h-1 inline-block absolute top-1/2 -translate-y-1/2 right-0 border-8 border-light-gray border-t-transparent border-b-transparent border-r-transparent translate-x-3.5"
                ></span
            ></span>
        </div>

        <!-- reseme -->
        <div class="group relative">
            <svg
                class="text-light-gray hover:text-dark-green fill-current transition-colors duration-300 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
            >
                <path
                    d="M0 7v15h24v-15h-24zm22 13h-20v-11h15v5l1.5-1.5 1.5 1.5v-5h2v11zm-13-14h-2v-2c0-1.104.896-2 2-2h6c1.104 0 2 .896 2 2v2h-2v-1.5c0-.276-.224-.5-.5-.5h-5c-.276 0-.5.224-.5.5v1.5z"
                />
            </svg>

            <span
                class="absolute top-0 right-12 w-max scale-0 rounded bg-light-gray p-2 text-xs text-white group-hover:scale-100 transition-all"
                >✨ Resume
                <span
                    class="w-1 h-1 inline-block absolute top-1/2 -translate-y-1/2 right-0 border-8 border-light-gray border-t-transparent border-b-transparent border-r-transparent translate-x-3.5"
                ></span
            ></span>
        </div>

        <!-- services -->
        <div class="group relative">
            <svg
                class="text-light-gray hover:text-dark-green fill-current transition-colors duration-300 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
            >
                <path
                    d="M21.698 10.658l2.302 1.342-12.002 7-11.998-7 2.301-1.342 9.697 5.658 9.7-5.658zm-9.7 10.657l-9.697-5.658-2.301 1.343 11.998 7 12.002-7-2.302-1.342-9.7 5.657zm0-19l8.032 4.685-8.032 4.685-8.029-4.685 8.029-4.685zm0-2.315l-11.998 7 11.998 7 12.002-7-12.002-7z"
                />
            </svg>

            <span
                class="absolute top-0 right-12 w-max scale-0 rounded bg-light-gray p-2 text-xs text-white group-hover:scale-100 transition-all"
                >✨ Services
                <span
                    class="w-1 h-1 inline-block absolute top-1/2 -translate-y-1/2 right-0 border-8 border-light-gray border-t-transparent border-b-transparent border-r-transparent translate-x-3.5"
                ></span
            ></span>
        </div>

        <!-- skill -->
        <div class="group relative">
            <svg
                class="text-light-gray hover:text-dark-green fill-current transition-colors duration-300 cursor-pointer"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
            >
                <path
                    d="M15.996 24h-12.605s.734-3.931.633-5.686c-.041-.724-.161-1.474-.54-2.104-.645-1-2.636-3.72-2.475-7.43.224-5.209 4.693-8.779 10.126-8.779 5.098 0 8.507 3.001 9.858 7.483.328 1.079.311 1.541-.151 2.607l-.006.013 1.751 2.142c.26.381.413.791.413 1.239 0 .547-.233 1.045-.61 1.399-.368.345-.767.452-1.248.642 0 0-.576 2.592-.873 3.291-.7 1.643-1.97 1.659-2.97 1.849-.394.083-.49.133-.681.681-.208.591-.363 1.435-.622 2.653zm-4.842-22c-4.285.048-7.74 2.548-8.121 6.488-.192 1.991.463 3.986 1.516 5.705.611 1 1.305 1.592 1.464 3.875.091 1.313-.05 2.636-.241 3.932h8.604c.141-.645.35-1.485.687-2.057.449-.766 1.097-1.099 1.926-1.254.838-.148 1.238-.059 1.489-.785.212-.579.612-2.221.831-3.902 1.203-.335.612-.161 1.671-.559-.206-.234-1.918-2.314-2.045-2.6-.336-.759-.046-1.19.225-1.913.086-.251.06-.357-.009-.613-1.049-3.949-3.891-6.317-7.997-6.317zm.063 14h-.447c-.117 0-.231-.039-.308-.109l-.594-.391h2.25l-.594.391c-.076.069-.189.109-.307.109zm.922-1h-2.279c-.138 0-.25-.111-.25-.25 0-.138.112-.25.25-.25h2.279c.138 0 .25.112.25.25s-.111.25-.25.25zm-1.322-.986h-1.414c-.013-2.57-1.403-2.878-1.403-4.647 0-1.695 1.327-2.852 3-2.852h.02c1.663.009 2.98 1.163 2.98 2.852 0 1.769-1.391 2.077-1.404 4.647h-1.414c0-2.735 1.318-3.614 1.318-4.651 0-.856-.694-1.333-1.5-1.348h-.019c-.798.022-1.481.499-1.481 1.348 0 1.037 1.317 1.916 1.317 4.651zm4.053-3.628l1.349.612-.414.911-1.298-.589c.151-.3.276-.607.363-.934zm-7.739 0c.086.332.208.63.359.935l-1.296.588-.413-.911 1.35-.612zm9.369-.886h-1.501c.01-.335-.021-.672-.093-1h1.594v1zm-9.499 0h-1.501v-1h1.593c-.071.327-.101.663-.092.998v.002zm7.02-2.714l1.243-.881.579.815-1.252.889c-.147-.291-.336-.566-.57-.823zm-6.043 0c-.23.251-.418.525-.569.822l-1.251-.888.578-.815 1.242.881zm4.435-1.046l.663-1.345.896.442-.663 1.345c-.278-.183-.581-.332-.896-.442zm-2.826-.001c-.316.11-.618.258-.897.442l-.663-1.344.897-.442.663 1.344zm1.913-.208c-.334-.039-.654-.041-1-.002v-1.529h1v1.531z"
                />
            </svg>

            <span
                class="absolute top-0 right-12 w-max scale-0 rounded bg-light-gray p-2 text-xs text-white group-hover:scale-100 transition-all"
                >✨ Skills
                <span
                    class="w-1 h-1 inline-block absolute top-1/2 -translate-y-1/2 right-0 border-8 border-light-gray border-t-transparent border-b-transparent border-r-transparent translate-x-3.5"
                ></span
            ></span>
        </div>

        <!-- portfolio -->
        <div class="group relative">
            <svg
                class="text-light-gray hover:text-dark-green fill-current transition-colors duration-300 cursor-pointer"
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="m14.865 16.6c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm-7.135 0c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm14.27 0c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm-11.365.5h2.73v1.4h-2.73zm-7.135 0h2.73v1.4h-2.73zm14.27 0h2.73v1.4h-2.73zm-2.905-6.3c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm-7.135 0c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm14.27 0c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm-11.365.5h2.73v1.4h-2.73zm-7.135 0h2.73v1.4h-2.73zm14.27 0h2.73v1.4h-2.73zm-2.905-6.3c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm-7.135 0c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm14.27 0c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm-11.365.5h2.73v1.4h-2.73zm-7.135 0h2.73v1.4h-2.73zm14.27 0h2.73v1.4h-2.73z"
                    fill-rule="nonzero"
                />
            </svg>

            <span
                class="absolute top-0 right-12 w-max scale-0 rounded bg-light-gray p-2 text-xs text-white group-hover:scale-100 transition-all"
                >✨ Portfolio
                <span
                    class="w-1 h-1 inline-block absolute top-1/2 -translate-y-1/2 right-0 border-8 border-light-gray border-t-transparent border-b-transparent border-r-transparent translate-x-3.5"
                ></span
            ></span>
        </div>

        <!-- contact -->
        <div class="group relative">
            <svg
                class="text-light-gray hover:text-dark-green fill-current transition-colors duration-300 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
            >
                <path
                    d="M22 5v14h-20v-14h20zm2-2h-24v18h24v-18zm-2 16l-6.526-6.618-3.445 3.483-3.418-3.525-6.611 6.66 5.051-8-5.051-6 10.029 7.446 9.971-7.446-4.998 6.01 4.998 7.99z"
                />
            </svg>

            <span
                class="absolute top-0 right-12 w-max scale-0 rounded bg-light-gray p-2 text-xs text-white group-hover:scale-100 transition-all"
                >✨ Contact
                <span
                    class="w-1 h-1 inline-block absolute top-1/2 -translate-y-1/2 right-0 border-8 border-light-gray border-t-transparent border-b-transparent border-r-transparent translate-x-3.5"
                ></span
            ></span>
        </div>
    </div>
</template>
