<template>
  <section class="nice-table">
    <table>
      <thead>
        <tr>
          <slot name="tableHeader"></slot>
        </tr>
      </thead>
      <tbody>
        <slot name="data"></slot>
      </tbody>
    </table>
  </section>
</template>
<style lang="scss">
@import "@/assets/scss/_functions.scss";
@import "@/assets/scss/variables";
.nice-table {
  overflow-x: overlay;
  box-shadow: 4px 4px 11px rgba(205, 200, 200, 0.6784313725);

  // @media screen and (max-width: map-get($grid, sm)) {
  //   width: 810px;
  // }
  table {
    width: 100%;
    background: var(--white-color);
    th,
    td {
      padding: 10px;
    }
    thead {
      padding: 10px 0;
      tr {
        height: 55px;
        text-align: center;
        th {
          font-size: 15px !important;
          svg {
            width: 20px;
            height: 20px;
            margin: {
              right: 5px;
            }
          }
          background: var(--gray-third-color);
          padding: {
            top: 10px;
            bottom: 10px;
          }
        }
      }
    }
    tbody {
      text-align: center;
      tr {
        border-bottom: 4px solid var(--third-border-color);
        td {
          padding: {
            top: 20px;
            bottom: 20px;
          }
          img {
            width: 20px;
            height: 20px;
            object-fit: cover;
            margin: 0 3px;
          }
          .buttons {
            display: flex;
            column-gap: 5px;
            button {
              all: unset;
              width: 20px;
              height: 20px;
              background: var(--third-color);
              display: grid;
              justify-content: center;
              align-content: center;
              padding: 5px;
              border-radius: var(--main-border-radius);
              cursor: pointer;
              &.danger {
                background: var(--first-color);
              }
              svg {
                width: 15px;
              }
            }
          }
        }
      }
    }
  }
}
[lang="ar"] {
  .nice-table table thead tr th svg {
    margin: {
      right: 0;
      left: 5px;
    }
  }
}
</style>
