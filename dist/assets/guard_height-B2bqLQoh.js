const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgNzkuMTcxYzI3ZiwgMjAyMi8wOC8xNi0xODowMjo0MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0wMi0wNFQyMDoyODoyOSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMDItMDRUMjE6MTA6MzcrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDItMDRUMjE6MTA6MzcrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBiN2Y5MjEyLWQzZDItMzA0ZS04MTFlLWNlYzI4MzU1OTVjOCIgeG1wTU06RG9jdW1lbnRJRD0i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";export{A as default};
//# sourceMappingURL=guard_height-B2bqLQoh.js.map