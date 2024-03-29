import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionTabs = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <h3 className="text-2xl text-yellowColor font-bold uppercase">
            HTML
          </h3>
        </AccordionTrigger>
        <AccordionContent className="text-xl">
          <p>
            The backbone of the web, HTML uses tags to structure content,
            enabling standardized and accessible web pages. It dictates visual
            layout and logical structure, ensuring consistency across browsers
            and devices.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <h3 className="text-2xl text-yellowColor font-bold uppercase">CSS</h3>
        </AccordionTrigger>
        <AccordionContent className="text-xl">
          <p>
            CSS enhances web pages by styling HTML elements, providing design
            consistency and responsiveness. Through selectors and rules, it
            enables the separation of content and presentation, ensuring a
            visually appealing and user-friendly experience.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <h3 className="text-2xl text-yellowColor font-bold uppercase">
            JavaScript
          </h3>
        </AccordionTrigger>
        <AccordionContent className="text-xl">
          <p>
            As a versatile scripting language, JavaScript adds interactivity and
            dynamic behavior to web pages, enabling client-side functionality.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          <h3 className="text-2xl text-yellowColor font-bold uppercase">
            Typescript
          </h3>
        </AccordionTrigger>
        <AccordionContent className="text-xl">
          <p>
            TypeScript, a superset of JavaScript, introduces static typing to
            enhance code reliability and maintainability.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          <h3 className="text-2xl text-yellowColor font-bold uppercase">
            ReactJs
          </h3>
        </AccordionTrigger>
        <AccordionContent className="text-xl">
          <p>
            React.js is a JavaScript library for building user interfaces,
            providing a declarative and component-based approach.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>
          <h3 className="text-2xl text-yellowColor font-bold uppercase">
            Nextjs
          </h3>
        </AccordionTrigger>
        <AccordionContent className="text-xl">
          <p>
            Next.js is a React framework that simplifies and accelerates the
            development of scalable and server-side-rendered React applications.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>
          <h3 className="text-2xl text-yellowColor font-bold uppercase">
            Astro
          </h3>
        </AccordionTrigger>
        <AccordionContent className="text-xl">
          <p>
            Astro is a modern static site generator that prioritizes speed and
            performance. It utilizes a buildless approach, leading to faster
            page loads by shipping only necessary code to the browser. Astro
            provides an efficient and optimized workflow for web development.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger>
          <h3 className="text-2xl text-yellowColor font-bold uppercase">Git</h3>
        </AccordionTrigger>
        <AccordionContent className="text-xl">
          <p>
            Git is a distributed version control system that tracks changes in
            source code during software development.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger>
          <h3 className="text-2xl text-yellowColor font-bold uppercase">
            TailwindCSS
          </h3>
        </AccordionTrigger>
        <AccordionContent className="text-xl">
          <p>
            Tailwind CSS is a utility-first CSS framework that simplifies
            styling by providing a set of pre-designed utility classes.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-10">
        <AccordionTrigger>
          <h3 className="text-2xl text-yellowColor font-bold uppercase">
            Figma
          </h3>
        </AccordionTrigger>
        <AccordionContent className="text-xl">
          <p>
            Figma is a collaborative design and prototyping tool operating in
            the cloud. It facilitates real-time collaboration among designers
            and teams, allowing the creation, sharing, and iteration of designs.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-11">
        <AccordionTrigger>
          <h3 className="text-2xl text-yellowColor font-bold uppercase">
            Redux
          </h3>
        </AccordionTrigger>
        <AccordionContent className="text-xl">
          <p>
            Redux is a JavaScript state management library commonly used with
            React, providing a predictable state container.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-12">
        <AccordionTrigger>
          <h3 className="text-2xl text-yellowColor font-bold uppercase">
            Zustand
          </h3>
        </AccordionTrigger>
        <AccordionContent className="text-xl">
          <p>
            Zustand is a minimalist React state management library, offering a
            concise API for efficient state handling in React components,
            emphasizing simplicity and reduced boilerplate.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-13">
        <AccordionTrigger>
          <h3 className="text-2xl text-yellowColor font-bold uppercase">
            React Native
          </h3>
        </AccordionTrigger>
        <AccordionContent className="text-xl">
          <p>
            React Native is a JavaScript framework for building cross-platform
            mobile applications, offering a single codebase for iOS and Android.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-14">
        <AccordionTrigger>
          <h3 className="text-2xl text-yellowColor font-bold uppercase">
            Framer Motion
          </h3>
        </AccordionTrigger>
        <AccordionContent className="text-xl">
          <p>
            Framer Motion is a React animation library known for its simplicity
            and power, enabling developers to create smooth and interactive
            animations with a declarative syntax, enhancing the user interface
            of React applications.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-15">
        <AccordionTrigger>
          <h3 className="text-2xl text-yellowColor font-bold uppercase">
            Gsap
          </h3>
        </AccordionTrigger>
        <AccordionContent className="text-xl">
          <p>
            GSAP is a robust JavaScript animation library known for its ease of
            use and versatility, empowering developers to create smooth and
            sophisticated animations for web applications with a focus on
            performance and efficiency.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-16">
        <AccordionTrigger>
          <h3 className="text-2xl text-yellowColor font-bold uppercase">
            Python
          </h3>
        </AccordionTrigger>
        <AccordionContent className="text-xl">
          <p>
            Python is a versatile, high-level programming language known for its
            readability and simplicity, widely used across various domains,
            including web development, data science, and artificial
            intelligence.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-17">
        <AccordionTrigger>
          <h3 className="text-2xl text-yellowColor font-bold uppercase">
            Django
          </h3>
        </AccordionTrigger>
        <AccordionContent className="text-xl">
          <p>
            Django is a high-level Python web framework emphasizing rapid
            development and clean, pragmatic design, offering built-in features
            for efficient web application development.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-18">
        <AccordionTrigger>
          <h3 className="text-2xl text-yellowColor font-bold uppercase">
            Rust
          </h3>
        </AccordionTrigger>
        <AccordionContent className="text-xl">
          <p>
            Rust is a systems programming language known for its emphasis on
            safety and performance, making it ideal for building reliable and
            efficient software in areas like systems development and embedded
            systems. With a modern syntax and a unique ownership model, Rust
            prevents common memory-related errors.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-19">
        <AccordionTrigger>
          <h3 className="text-2xl text-yellowColor font-bold uppercase">
            Go/Golang
          </h3>
        </AccordionTrigger>
        <AccordionContent className="text-xl">
          <p>
            Go is a statically-typed language prized for its simplicity and
            efficiency, particularly well-suited for concurrent programming and
            building scalable backend services and distributed systems.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionTabs;
