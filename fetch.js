const item = document.querySelector('.mini')
fetch('./data.json')
      .then(res => res.json())
      .then(data => {
        data.forEach(post => {
                item.insertAdjacentHTML('beforeend', `
                   <div class="list">
                   <div class="media">
                   <div class="thumbnail object-cover">
                     <a href=""><img src="${post.image}" alt=""></a>
                   </div>
                   <div class="hoverable">
                     <ul>
                       <li class="active"><a href=""><i class="ri-heart-line"></i></a></li>
                       <li><a href=""><i class="ri-eye-line"></i></a></li>
                       <li><a href=""><i class="ri-shuffle-line"></i></a></li>
                     </ul>
                   </div>
                   <div class="discount circle flexcenter"><span>32%</span></div>
                 </div>
                 <div class="content">
                   <div class="rating">
                     <div class="stars"></div>
                     <span class="mini-text">(2,548)</span>
                   </div>
                   <h3 class="main-links"><a href="">
                       ${post.name}
                     </a></h3>
                   <div class="price">
                     <span class="current">$ ${post.sale}</span>
                     <span class="normal mini-text">$ ${post.price}</span>
                   </div>
                   <div class="mini-text">
                     <p>2891 sold</p>
                     <p>Free Shipping</p>
                   </div>
                 </div></div>
                `);
        })
      })
      const smlmini = document.querySelector('.smlmini')
fetch('./data.json')
      .then(res => res.json())
      .then(data => {
        data.forEach(post => {
          smlmini.insertAdjacentHTML('beforeend', `
                   <div class="list">
                   <div class="media">
                   <div class="thumbnail object-cover">
                     <a href=""><img src="${post.image}" alt=""></a>
                   </div>
                   <div class="hoverable">
                     <ul>
                       <li class="active"><a href=""><i class="ri-heart-line"></i></a></li>
                       <li><a href=""><i class="ri-eye-line"></i></a></li>
                       <li><a href=""><i class="ri-shuffle-line"></i></a></li>
                     </ul>
                   </div>
                   <div class="discount circle flexcenter"><span>32%</span></div>
                 </div>
                 <div class="content">
                   <div class="rating">
                     <div class="stars"></div>
                     <span class="mini-text">(2,548)</span>
                   </div>
                   <h3 class="main-links"><a href="">
                       ${post.name}
                     </a></h3>
                   <div class="price">
                     <span class="current">$ ${post.sale}</span>
                     <span class="normal mini-text">$ ${post.price}</span>
                   </div>
                   <div class="mini-text">
                     <p>2891 sold</p>
                     <p>Free Shipping</p>
                   </div>
                 </div></div>
                `);
        })
      })
      
      const featured = document.querySelector('.fea');
      fetch('./datafeature.json')
      .then(res => res.json())
      .then(data => {
        data.forEach(post => {
          featured.insertAdjacentHTML('beforeend', `
          <div class="item">
          <div class="media">
          <div class="thumbnail object-cover">
            <a href=""><img src="${post.image}" alt=""></a>
          </div>
          <div class="hoverable">
            <ul>
              <li class="active"><a href=""><i class="ri-heart-line"></i></a></li>
              <li><a href=""><i class="ri-eye-line"></i></a></li>
              <li><a href=""><i class="ri-shuffle-line"></i></a></li>
            </ul>
          </div>
          <div class="discount circle flexcenter"><span>32%</span></div>
        </div>
        <div class="content">
          <div class="rating">
            <div class="stars"></div>
            <span class="mini-text">(2,548)</span>
          </div>
          <h3 class="main-links"><a href="">
              ${post.name}
            </a></h3>
          <div class="price">
            <span class="current">$ ${post.sale}</span>
            <span class="normal mini-text">$ ${post.price}</span>
          </div>
          <div class="mini-text">
            <p>2891 sold</p>
            <p>Free Shipping</p>
          </div>
        </div>
        </div>
                `);
        })
      })


