<template>
    <header>
  
      <div class="wrapper">
        <HelloWorld msg="You did it!" />
  
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/product">product</RouterLink>
          <button @click="$emit"> </button>
        </nav>
      </div>
    </header>
  
    <RouterView />
  </template>