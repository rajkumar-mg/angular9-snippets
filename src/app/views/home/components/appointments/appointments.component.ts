import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NguCarouselConfig, NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppointmentsComponent implements OnInit {

  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    navText: [''],
    autoHeight: true,
    autoWidth: true,
    animateOut: false,
    animateIn: false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  @ViewChild('carousal') carousal;

  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    slide: 1,
    speed: 500,
    point: {
      visible: true
    },
    touch: true,
    velocity: 0,
    loop: true,
    interval: { timing: 4000 },
    animation: 'lazy',
    custom: 'banner'
  };

  todayDate = new Date().getDate();
  todayMonth = this.getMonthName(new Date().getMonth());

  carousalData = [
    {
      time: "16:00",
      estimatedHrs: "2 hours",
      title: "Release Update",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
    },
    {
      time: "19:00",
      estimatedHrs: "5 hours",
      title: "Make a Backup",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
    },
    {
      time: "22:45",
      estimatedHrs: "8 hours 45 minutes",
      title: "Buy Ticktes",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
    },
  ]

  constructor() { }

  ngOnInit(): void {
    this.initClock();
  }

  ngOnChanges(): void {
    this.initClock();
  }

  getMonthName(index) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[index];
  }

  initClock() {
    let canvas: any = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    var radius;
    if (window.innerWidth < 600) {
      radius = canvas.height / 3;
    }
    else {
      radius = canvas.height / 2;
    }
    ctx.translate(radius, radius);
    if (window.innerWidth < 600) {
      radius = radius * 1;
    }
    else {
      radius = radius * 0.90;
    }
    setInterval(() => {
      this.drawClock(ctx, radius)
    }, 1000);
  }

  drawClock(ctx, radius) {
    this.drawFace(ctx, radius);
    this.drawNumbers(ctx, radius);
    this.drawTime(ctx, radius);
  }

  drawFace(ctx, radius) {
    var grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#16a085';
    ctx.fill();
    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 2.05);
    grad.addColorStop(0, 'lightgrey');
    grad.addColorStop(0.5, 'lightgrey');
    grad.addColorStop(1, 'lightgrey');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius / 2 * 0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = 'lightgrey';
    ctx.fill();
  }

  drawNumbers(ctx, radius) {
    var ang;
    var num;
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (num = 1; num < 13; num++) {
      ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.85);
      ctx.rotate(-ang);
      ctx.fillText('', 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius * 0.85);
      ctx.rotate(-ang);
    }
  }

  drawTime(ctx, radius) {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour = hour % 12;
    hour = (hour * Math.PI / 6) +
      (minute * Math.PI / (6 * 60)) +
      (second * Math.PI / (360 * 60));
    this.drawHand(ctx, hour, radius * 0.5, radius * 0.07);
    //minute
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    this.drawHand(ctx, minute, radius * 0.8, radius * 0.07);
    // second
    second = (second * Math.PI / 30);
    this.drawHand(ctx, second, radius * 0.9, radius * 0.02);
  }

  drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
  }


}
