<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content content">
        <div class="content__location">
          <h2>Our Location</h2>
          <p class="address">
            <a href="#">Ukraine, Chernivtsi city, st. Khotynska 41</a>
          </p>
        </div>
        <div class="content__social social">
          <ul class="social__list">
            <li class="social__item">
              <a href="https://www.facebook.com/tentservicing/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                  /></svg
              ></a>
            </li>
            <li class="social__item">
              <a href="mailto:Wakry@ukr.net">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"
                  />
                </svg>
              </a>
            </li>
            <li class="social__item">
              <a href="viber://chat?number=380503743129">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M16.676 2.628a21.9 21.9 0 0 0-9.555 0l-.339.075a4.9 4.9 0 0 0-3.684 3.58a19.5 19.5 0 0 0 0 9.577a4.9 4.9 0 0 0 3.444 3.52l.465 2.776a.5.5 0 0 0 .826.29l2.731-2.443a22 22 0 0 0 6.112-.487l.34-.075a4.9 4.9 0 0 0 3.684-3.58a19.5 19.5 0 0 0 0-9.577a4.9 4.9 0 0 0-3.685-3.58zM7.965 6.202a.82.82 0 0 0-.537.106h-.014c-.375.22-.713.497-1.001.823c-.24.277-.37.557-.404.827c-.02.16-.006.322.041.475l.018.01c.27.793.622 1.556 1.052 2.274a13.4 13.4 0 0 0 2.03 2.775l.024.034l.038.028l.023.027l.028.024a13.6 13.6 0 0 0 2.782 2.04c1.155.629 1.856.926 2.277 1.05v.006c.123.038.235.055.348.055a1.6 1.6 0 0 0 .964-.414c.325-.288.6-.627.814-1.004v-.007c.201-.38.133-.738-.157-.981A12 12 0 0 0 14.41 13c-.448-.243-.903-.096-1.087.15l-.393.496c-.202.246-.568.212-.568.212l-.01.006c-2.731-.697-3.46-3.462-3.46-3.462s-.034-.376.219-.568l.492-.396c.236-.192.4-.646.147-1.094a12 12 0 0 0-1.347-1.88a.75.75 0 0 0-.44-.263M12.579 5a.5.5 0 0 0 0 1c1.265 0 2.315.413 3.146 1.205c.427.433.76.946.978 1.508c.219.563.319 1.164.293 1.766a.5.5 0 0 0 1 .042a5.4 5.4 0 0 0-.361-2.17a5.4 5.4 0 0 0-1.204-1.854l-.01-.01C15.39 5.502 14.085 5 12.579 5m-.034 1.644a.5.5 0 0 0 0 1h.017c.912.065 1.576.369 2.041.868c.477.514.724 1.153.705 1.943a.5.5 0 0 0 1 .023c.024-1.037-.31-1.932-.972-2.646V7.83c-.677-.726-1.606-1.11-2.724-1.185l-.017-.002zm-.019 1.675a.5.5 0 1 0-.052.998c.418.022.685.148.853.317c.169.17.295.443.318.87a.5.5 0 1 0 .998-.053c-.032-.6-.22-1.13-.605-1.52c-.387-.39-.914-.58-1.512-.612"
                    clip-rule="evenodd"
                  /></svg
              ></a>
            </li>
            <li class="social__item"></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <p>&copy;2024 Tent Service – All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  padding: 40px 0;
  color: $main-color;
  background-color: $background-color;
  z-index: 10;
  overflow-x: hidden;
  // .footer__bottom

  &__bottom {
    text-align: center;
  }
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  // .content__location

  &__location {
  }

  // .content__social

  &__social {
  }
}
.social {
  // .social__list

  &__list {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  // .social__item

  &__item {
    transition: color 0.3s ease;
    @media (any-hover: hover) {
      &:hover {
        color: $secondary-color;
      }
    }
  }
}
h2 {
  font-size: 24px;
  font-weight: 600;
  line-height: 2;
}
</style>
