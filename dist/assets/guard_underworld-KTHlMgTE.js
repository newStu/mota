const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE6GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgNzkuMTcxYzI3ZiwgMjAyMi8wOC8xNi0xODowMjo0MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0wMi0wNFQyMDoyODoyOSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMDItMDRUMjE6MTArMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDItMDRUMjE6MTArMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBmNTIxYjU4LTU0YjMtMTg0Yi1hZTliLWE3NWU5NjU0ZjU4MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowZjUyMWI1OC01NGIzLTE4NGItYWU5Yi1hNzVlOTY1NGY1ODIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowZjUyMWI1OC01NGIzLTE4NGItYWU5Yi1hNzVlOTY1NGY1ODIiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjBmNTIxYjU4LTU0YjMtMTg0Yi1hZTliLWE3NWU5NjU0ZjU4MiIgc3RFdnQ6d2hlbj0iMjAyNC0wMi0wNFQyMDoyODoyOSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pkijc9IAAAe2SURBVFiFjZffbyNXFcc/945/x97xryRje+yAki51FwV2t6hISAuIVqoqHnlkxSMP/Bk8oOWRZ6QKsY/wWqEiqIoQ+4M2K7VsNhtt0+yOPfbEjuMfceKJPTM8jGcab7qBI11prs893/M995x77rX4y51fEUgEm/MyIw7AY94DiJ95iS+kIsEDICFwAPBQACYIcB2XmJisA/Y1PrgUFyCyzbvhJDAIJNCdkUzhec+kIkrVShkZiSCEAHdOQEhwXVzAaDQ4myW+RIiNbd49uQwXQPzmzt/DSYLRwsIJGQAkznMhRG2tqhNLpahqGp7n4UnF13suRKMYe3vYts2LponneS9clLXLcAGkxCEYE64sjOB3oKbrOj9t/Y23f7TM5sP3yf/510SjCtGowubD99mse7z9/AO+++8/oOs6QO1/4UocIueZSWa8SuLxOMNnn8Hv7jBsNhETG9f1dZ3Hn8BvTaTVJjGxicfjC7aX4YYEPM/belkphAC4AeC6Lp/cuI1nn4EWQ0pJab7u05u/gLMzKMdQFIkbMPNly/O8C46FEDdCAp7n3dd1/fr8O1xkmiae592fE2Fc+AaVSuUCWO47Pwi/m80myiys+vvAdV3XF3CFEDQajftCiO9HgI8rlcpbyWQSz/MWHJimSaVSecs0TQCUmU0mBgFWEGg6GgBz3jme570lhCCZTFIulxdIznE/lsCtVCrFbDZD0zQSiRiJRIylpRiu65JKpQCQUgLQaLQWnJ//DnTB2nK5HKYjwE0kYmiaFuDekj6AS7lcZmkpieuClPDw4aMQwHVdTNNESsl4PMY020jJwjDNNuPxGCklpmniui5LS0uUy2UajQbSbxW4LnM/PrFIwDiXS+E4PtjW1mcIIVBVlel0yurqalAPlEolRqMRrZYII3Vdl9FohKIoNJtNhsNhSF5VVVzXZWvrM27c2Ax3LbCNALfb7fYfj4+Pw2hfvHhBqVTCMAw0TeP1119HURQcx+98iqIwHo9pGhYAleoqiuI3pXQ6jaqqvPbaazSbTQzDIBqNcnBwsOD8+PgY4LYE7g4GA/b39zk9PSWbzXLz5k16vR6JRCKMbjQaYds2UkqklFhml2jNILlmYpnd8Hfbtjk5OWE8Hs9zn6DX66HrOqenp9i2zf7+PoPBAOBuJIhodXWVjY0Ncrk0AE+ePKFQKJDL5XAch3K5jGVZtNttpJTEqibv/uR7fDn+kqf3TQ4sPxXB1nY6HaSUFAoFer0e2WyWQqHAwcEB0WiUbrf7VQ0A5HI5VDXNdMqCFApXcF1YWcmRz+fZ3t7m8PCQb//YZimtklOWWXmjw3+2D8nn89Tr9bAupJT0ej0AHMdBVdM4joOiKCEBGThyHId5igGYTqd0Oh263cF8Dtlshnq9TrFYpPUoyafNB3SP2rQeJSkWi9TrdbLZDNlshmJRRQhBp9MJa8dxIJ9Xw/kCgZfl6tWrdDoddnd3OTzsoyg+QKFwhXq9juzX2Lt3xu6/TpD9GvV6nULhShhEp9PnyZMndDodCoXCAonzskBgXsgAXLu2TrFYpNfr0ev16PdHRKPQ642QUhKNC7o7Kbo7KaJxMd9uf02/PwrtisUiy8vL5PP5Cz4WakBRFI6OhuRyVwA4OBiiaRqDwYDhcEi326VYLIbHKZgDGIbB6ekpAKVSCcuyiMViKIqCpmlMp1M0rYDrwtHRMDyyCwT6/X5YIIGD0Wg0J3NAJpPh5OSEdNo/Jaqqsrq6Gn4HYhgGiqJwcHAQFmE2m6XfH1/APU/grmVZPxdCMBwO/dxIiWVZ4fnWdR1N01DVKI7jt9Qgn6VSnsFggqIoIcGnT58CYFkWQgiOjo5exr17nsBtKWWi3W4v5EdK+bOgeA4PD+l0Oui6TiaTIZ1OMr+l6fXGWJbFaDQKr93zXbPdbv/pJVyA2wDizp2/col4mYz/frNt/5odDofUajWuXr0aLmq1WozHY54/f04mk/GLNOrf0fPtFq9yEHmVAnjHdV2SySSRSISNjQ1msxnNZhPTNIPXUhhRo9GgVCpRqVSwbZvj42NmsxmDwQAp5TvA10Z6GYEPg3dCq9WiUqmwslJA11f56KN/Mk/XP+Zrb6XTad588waeB48fb2MYBsvLy6RSKSaTyYev2oVXNiKAarXK5uYm6XSaBw8eMJlMOTmZUqlUEEIghPjhfFCpVJDSP+fNZpN0Os3m5ibVavUyF6/cgevBLbizs4OqqozHY3Z3d5FSkkwmLxj4lT7Cdd1531fZ2dlBShncC9eBR/8PgTdc192KxWIL5zUWi9HtdrFt+2ujOj095d69e8TjcVRVDW1t2yaRSDCZTLaklNeA7csIbLiu+3k8Hmd9fZ1qVQ8VhtHAtm0MwwhvsvPS7XaJxWLous7GxvqC3dnZGYZhYNv251LKbwHPAv3LNfA4Ho/LWq1GqVTCcdxwlEolFEVhbW2NlZUVADwRxRP+cVtZWWFtbW3+clq0k1JSq9WIx+MSeHzZDsQ0TWM2m7G/v3/hLe940n/TmxaeiLSUmd/dnEi21TCtUq1Ww/M89vb2FuyCB6imaRiGEbuMwGGzZfmOL/6ZQTrHEwDPcZBCrGde/B6AYe2X3/Q874vGnp93V0knFgzFV2Relv8CoOfEbUP6VVUAAAAASUVORK5CYII=";export{A as default};
//# sourceMappingURL=guard_underworld-KTHlMgTE.js.map
