const OFFSET = 60;

export default {
  data() {
    return {
      showOnScroll: true,
      lastScrollPosition: 0,
      scrollValue: 0,
      scrollNav: false,
    };
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },

  methods: {
    /* hide nav on scroll down, show on scroll up */
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return;
      }
      this.showOnScroll = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
      if (window.pageYOffset > 60) {
        this.scrollNav = true;
      } else {
        this.scrollNav = false;
      }
    },
  },
};
