<template>
  <div class="container">
    <div class="column">
      <div class="box" style="background-color: $color-primary; color: $color-text-tertiary; border-radius: $border-radius;">
        <h1 style="font-size: $font-size-h1;">Heading 1</h1>
        <h2 style="font-size: $font-size-h2;">Heading 2</h2>
        <h3 style="font-size: $font-size-h3;">Heading 3</h3>
        <h4 style="font-size: $font-size-h4;">Heading 4</h4>
        <h5 style="font-size: $font-size-h5;">Heading 5</h5>
        <h6 style="font-size: $font-size-h6;">Heading 6</h6>
        <p style="font-size: $font-size-p;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod.</p>
        <a href="#" style="color: $color-text-tertiary;">This is a link</a>
        <button class="btn btn-primary" style="background-color: $color-white; color: $color-primary; border: 2px solid $color-primary; border-radius: $border-radius; filter: $filter-active;">Primary Button</button>
        <button class="btn btn-secondary" style="background-color: $color-secondary; color: $color-white; border-radius: $border-radius;">Secondary Button</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  .container {
    width: 100%;
    flex-direction: row;
    display: flex;
    padding-inline: 30%;
    }
.column {
    flex: 50%;
    padding: 10px;
    .box {
      width: 80%;
      height: 200px;
      flex-direction: column;
    }
    }
</style>
