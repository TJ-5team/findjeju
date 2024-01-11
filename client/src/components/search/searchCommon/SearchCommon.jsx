import React from 'react';
import styles from '../styles.module.css'
import { Link } from 'react-router-dom';
export default function SearchCommon({list}) {
  const noImageUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAABKCAYAAAAFWyzXAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAGkUlEQVR4nO2bPXfiOhrHf36DLClAc5I5Z1LsbaZJc5tMMdvc5jb7VfYT7VfZ+lZT7DTT0OQWadIwIAiYxAhLW1jyGILBJoa7YfI/hxOwpEfPX8+bbDmeMYafBf5frcAxEQJ4ngfQAiLA+ysVahAGUMaYhbsQFhqjNE3/7Xne346vV/MwxjwGQfAvYCNZ3/d9cXy1DgPP885YC9PiD2OMeTquSoeD5bKSfcOSvsRxzHK5xPeby2Ge56G1JkkSjDEuVzQCrTVRFPHu3bvSPqVklVIkSdIoWd/30Vozn8/RWjdKNk1Tzs7OtvYpJev7PkEQNG5Zz/MIw5Cm67vTdxtKye4S7BbBGEOapvuIOTpqkw3DkDRNeXx8xBhDEAS022201mitD6FjY6hFNgxDHh8fmUwmLJdLIHPNTqdDt9vNY/JQCMPwRYtaOSDDMGQ+nzMYDFBKrbjyZDJhNBrlMdk0PM8jCII8se2KzTJUIuv7Pmma8vDwkCeYoiKtVos4jonjeG9FyuDmcws9Ho9z8nVRmWySJCilCIJgYyb1PC+P46as64jOZjOklERRxNPTE8PhEKA24cpuvCtOfN/HGNNYSSkSHY1Gedg4K7uwqUO4ElljDGEYllrM7YyaqsvrFl2XG0XRCmG30LtQSTOtNe12m3a7jVJqhbQjCnB+fg7wIuuuEy0mwiLCMCSO49zqVSxcqfQ45Xu9HkopFosFQRDgeR7L5RJjDEIIzs7O8pK0DxzROI63El3vC+Slbxsq19k0TYmiiPfv3zObzXh6esIYQ6vV4vz8nE6n86KdlOd5RFH0LEZ3jXGE0zTlw4cPW/vX2lS4u6Ber5db1MVymqYr7utqbpUNQFkyqoJ1b7i4uCjtW3u76HYwThmt9bMYdUSNMTt3VUVl6xItygiCYGfp2zt1OtLrRF15mE6nfP/+Pbd+mZLFUrIP0fW5t7bvLXkD3Ao/PDwwnU5ZLBaMRiO01hsJv9SiddGYdGel6XTKZDIhCAJarRZJkjAcDvM67DxhU608NBqZoUh0PB6vbAKiKCJJkhWXdhYdDodHIwoNkN1G1CGKIhaLRU4uSZK9tnsvxV5PKhyqEHVwhAeDAbPZ7OhE4QWWrUPUIQxDlFIrpeuY2GvGfYgCed09xA1+FdQmuy/R/wfU0rK4rXttRKEG2V33mK8BlbQ9BaJQgeypEIUtdVZrTZqm+L6PlJLxeJyT3PcG3d0JLRaLxs96lFKlNxwOpa1RFBEEAUop0jSt9CSgCowxRFHU+Cnecrmk3W5v7VNK1j1PArYeA74mvM7g2xNvZE8Vb2RPFUWynn2d5iRguazUtmLp0VpreUovfQErz3C9QnE/+df5vKZ3MsdGnUO0nypBeW/vG58o3sieKt7InireyJ4q3sieKn4qsu6FrUshRHe9zV7v1JUphPhNCPFbMxo2B2fZz8A/hBDRWvtn4Oq4Kh0O68+Nr4FvLxUqpfzjpTIOgSLZW+BaCHEnpZxs6iyEuCJbkA4wB/pSyvsN/a4BpJR9Gx7XwJ/AB+AXO/a/ZA8MfrXybqWUfTv+F+CCH141AL5JKecb9Jjw41/Q+lLKiRDio52nY8f2pZST9QQ1sELKiN4A98AX2/fGXl9H136whC7tWAX0yZ6IfLJE76zMj4W80bUL8gX4CvScXjaH3Nj5v9j+PeA7oCzRayv3i53/Ezx34z+Bz0KIqw0W+zswcasPDIQQPTJrPbPuBnxzMm1u+Aj8R0qp7O8ruygTKeVKKNlF+GiJXwG4PkIIyHLLQEo5t2RvpZS3tj0GfhdCXK2QlVIOhBD3dmXWCVySWaUI1/drBbJq/buUMv9rlS4SdK58SeYJK2OFEB3r1q5N2UWJgMiSLqKzqc72gY6dTG1oPzhs2bomc+WvZPnE4Z4sTj9ZQr8Cd5Z4y/bpkS2U+wwA9ewUz7pCn8xtxoWmCT/i0KFrrzcGa50u8LXg9sV5nSXv7PdvhZBz+t5JKe/WZZftoJygy8K1e+DKJST794pq8boPOnaeS1Zrvft+L6W8LeYWGxYDsqpyacdHTueN57M2hvpkLuKu3dpEciOEuLGX80TQFGzpuLcKO1ce88OrXJ74ZyHO52Tk+2Ruf0OWaF37QAgxqP3c2Kb+cyB2de8QcK67XvNtnHbJcos7Mb8gC7s/XP9NetZ+d9EOPBjJwjxlueACUEU97MKool6b9Hx1JwKW2Cf7MyazniLbJQ22jX11ZB0Kbjp29XoX/gcidHJcfodSAAAAAABJRU5ErkJggg=="
  if(!list){
    return (
      <div> loding </div>
    );
  }else{
  return (
      <ul className={styles.commonList}>
        <li>
          <Link to={`/detail/${list.contentid}/${list.contenttypeid}`} className={styles.searchImg}>
            <img src={list.firstimage.length === 0 ? noImageUrl : list.firstimage} alt="" />
            <span className={styles.distance}>
              <span></span>
            </span>
          </Link>
          <div className={styles.commonContents}>
            <div className={styles.contentsTitle}>
              <Link to={`/detail/${list.contentid}/${list.contenttypeid}`}>
                {list.title}
              </Link>
            </div>
            <span className={styles.contentsArea}>{list.addr1.split(" ")[0]} {list.addr1.split(" ")[1]}</span>
            <div className={styles.contentsTag}>
              <span>
              </span>
            </div>
          </div>
          <button></button>
        </li>
      </ul>
  );
  }
}

