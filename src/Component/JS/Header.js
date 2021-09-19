import React from "react";
import "../CSS/Header.css";
import { Button } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcQAAABvCAMAAABFLUC0AAABI1BMVEX///8AAAAqcfEjVa8sdv4jV7UpbecmYs3W1tYpbuokW7319fUkXL/T09MoauEqcO5NTU1FRUWDg4MlX8aVlZXs7Ozb29s3NzcrdPj5+fllZWUvLy8nZdWNjY0mY9CwsLBVVVVwcHB5eXmioqLu8fo+Pj7Ly8saGhoAYOYAQKgARapoaGjk5OSFhYUFSqshISEAaf43a9A4cN62trYWZucZb/7b4e8AS72Vs/4AU8MAU8qZrN1oiNBSec04bdc2c+hgje3X4PvG0Oo4Z8MSVcC4yvhDf/Sot91yjMpbjffM2fykvfx3n/uBoOoAWdpOh/vT2uyEoehRft6gteqLrP6Hm8xaeL1Zf9O+yuo8asa0yf9GareQptsASsWisddrj+BynP50g3YFAAAJOUlEQVR4nO2daUMaSRCGh3jiFY0n3gdRPGMSxICaQ3F1k5U1uom68cj//xULDDPdPV3V0w0419bzJUZHpqgnA/3S3RPLInzJZLLZsGsgCIIgCIIgiJjQH3YBROuQxARAEhMASUwAJDEBkMQEQBITAElMACQxAZDEBEASEwBJTAAkMQGQxARAEhMASUwAJDEBkMQEQBITAElMACQxAZBEQwoHh0dvHT7WeWfzqcrnD19CqIkkGnF8sl8uj46O9lSZn5+frTNk010lnc+lTwOviiSacL4/MDAwOgpbrEtMp1/m/gy6LJJowF25T0Piy/ynTLB1kUR9jsp9WhJfTP0RbGEkUZuzjT5NiS/2PgRaWYQkzo0ZMBd4edn9Pm2JL3YD3VqsJXEwZTMCPcDmss3SqsYjDc9M1libkH+USRnhvu1M2w85ObMoP+bW8itjVpA3tPM+A4lTyOBm3OnWsk63Fl/XmQG6JWAkcRH64Xu3r37nqjKDH9qsxGHnO8A/sUHVI6CAlRfWuwwkvtj7CjeAdWurpW4JtC7RWnHrGm+lrOeQ2NuEwlTqPVT5rz4jiejYhnXLv/UBSrReOWWttVJWdCQuAIUfb3SZSdz7hrRg2TnNm1a6JdAOida0U9frFsqKtsSuLkOJU7tYWFxUFKzdLYG2SLReO3VNN19WpCU+bvhLzKcFiZ1/YU2YdE602Xy3BNoj0Vpz6tpuuqwoS8yu+12JlU8Xpxd5XuLULvZZOHumPkEpYInjbl0rTZc1boT7a1oS/YdcVXCJ511qiZWLQu2wnCCx82/sRKxb0Cs3I2CJ1oRblzIA6ZZlQAASL9dVEocq3xvR/nOalzi1h85ntLlbrUtsPOVVty7VKeMp8VeXQmLpquAcd50XJHZ2yudoxBfWLVVcDE7iWuOFfSGl0bFYSrzdUEisXLMDv4gSp/b+kc6xNmb/qRUXg5M4mXplfzHnlKWIi6qyppdsNsGwjfL8Enc6FBL5D0mzOVFipzy2mXSGftvO2RRxMUiJqSX7q02nLjwuao1Ox3Rqcnl2iT9wibNXYhj0SpTHNtVuLdtfTSvqbhCoRCcejjh1oXExFhLFAXZ2vQOTOHvleYS0V+Kud2xT61YjHrrhGo2LwUp0fvLGqQuLi5GWuAROx/zsQCW+9T5Ct1eiNLbhu+WGaywuBiyx0cF+VwQSFyMtEeR4A5VYkiYNZYne6WG7W8P1r1m3kLgYtMTUZP3dYcutCw5A8ZPY0YFJLN1KBwNXomd6uNEte9TQQrcE2iYxNSgcipw5dhLPdjCJ84fy0dLApnop/haOELvlExfDksjNekKNi5vEzAZ2Jc4/yCswpIhRvxSF6WGnW732X1m4hkSEJtEac8qC4mLcJJ7vgBKLpfLNmXz01zwgsXOKP8QjkYVrKC6GJ9FacuoC4mLMJNbihSyxeHMLr4O6BiXu/csd4pXIugWUH6JE1lY5LsZM4o8dQOL+AXb4EyhRuBQliax+OS6GKdE9uRwXoyKxVwU7uOFQkFi+R0tJA6PT2rtigR0iS2ThWoqLuhK1FpybSmQ+vAFIW+LW9hzONj8ib0piSoVbdGEDkLiPLin9koMl8q+ngEQ8LrZ1usBUIjfr6QlA2hLVc/L8RwnPKPEWuBJHj9A2eWb2mUQu8AMS8bgYrkTOgVhA/CWWgVFp4wnkuhGJ3IwUJJEL12JcDFkiFhfjLxF/Nf2QxyT6XIl8t4QxStgS2aynEBfjJfEYkHiHNSmb68Ykqt8Ta7jhWoiLoUtki2T5uBgvif3rksTyI9ak6zwmkZ8aRiSybvHPInyJbJEsFxejInFxGkCSaP3s8kosXmJNKqBXojonervFxcUISGSLZFlc1Jao3grDJ8nnnNk/3pBeTvFfv0Ikqj+xcXHD9Zz0rTAlAnFRP+xnVPC/96zLM35JL6f29wvH8q+fIgMb5Wen0PPX6ZY5TUoE4mJUPrEBASQW1r0SDy+P72/2Sw/ypyRZOGIoZzF4jLplTrMSuUWyE75lRVJiYxqDD/vFYu0eKGVoNhGUKG43VUjkxgGNuBgNidyspx2A3uBlRVOiPaEoTUUVe4rSR6hw2Idn9kGJUlxUdMuc5iV64+ICXlY0JVqPO7LEcub4oaf05In94Huid/2wUiLrlh0XFd0ypwWJbJGsHRffx02iBcwn3lrWWalntnT1/fsNm6F4B41O9zznUEtk+3XtJ4N3y5xWJLJFsnZcXI2bxFrMECXWP7S5LRXrOzHcV9ULKOwL8aKGj0TWLXtBNtotc1qSyBbJ2nGxN2YSa4lfkOjk/eu3pVLVYuOo68oQIFHaue8nkXXLjouDEZHIFsna3ZmImcTsukeiOwubKVQl2gsXv1aGAInQXgwfiZrdMqdFiWzW0w5AW/GSaB3siC+nhyfudNTH2dmn2p+FyhAk8bd0Dn+J3rgId8ucFiVys55bjTqB5xBdiVaXZ3RadJYNn9ZeT6uXZTY/BEkE7ivlL5EL1063IiFRiovjsboSnQ2KTGLtQ7fLqqH6Zu+nbOHdECQRusObhkSpW1vRkMgWyeJ7FyMssbFVmEmsDm0OHm6t+6K93bsyBEoENgprSWTd8r/VjT6tS2SLZNHdeM8vMTOoXOTmHixLLIh3zyjfX94V56+uS9Kth3mJ4JZ9LYksXA8btUJJGyRaS05d2N7F55fI3mzUAHuUfuwIH7uVi7WdbUX5/tG8RPDGYHoSvXGxHbRDIms2shsv0hIzGjcj8kiEb2OjKZHt123bPUHbIpEtkoV340VaonXmf283USIQL2roSvTrljntkeiNix6iIxEs78RQ4h68Kk5bok+3zGmPRCkuikRHInga//udChKxmyxqS/TpljmORHCspC+RWzgDDPmblei+ewCbsAaF82lKRJ7I+Y7RlYhU68zz+kvk4mLz+5w5JuxbzGyCb7Kbi3VGdBLp6koDaOwwYj/Q4rDZu8CCc1tw4DYB484dw+upeQtc4+ZhDutYdWyjLxG9I9j0yHCNyVa7RTTHY1lbInYLcCJ07rQlIqMaInz6+wb0JKJ3OiXCp/+krCExnyeHkeZgvzyqlPgyn5NvrUhEi8zZUXG/WCy5VGxyNunP3+jtMBZkAQL+f9oIgiAIgiAIgiAIgiAIgiAIgiAIgiCI/wv/AZ+Yi3gxYqE+AAAAAElFTkSuQmCC"
          alt=""
        />
      </div>
      <div className="headre_right">
        <div>
          <h3>Home</h3>
        </div>
        <div className="active">
          <h3>How We Help</h3>
        </div>
        <div>
          <h3>Programs</h3>
        </div>
        <div>
          <h3>FAQS</h3>
        </div>
        <div className="header_btn">
          <Button className="button">Get In Touch</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
