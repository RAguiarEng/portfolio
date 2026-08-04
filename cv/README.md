# Automated CV Generation (PDF) with Python + WeasyPrint

This directory contains the complete process used to generate my resume (CV) as a PDF file, in both Portuguese and English, from HTML and CSS source files, using Python and the WeasyPrint library.

This document serves two purposes: it documents the technical process for my own reference, and it works as a practical guide for other professionals who want to automate the generation of their own resumes from a web-based template.

## Why generate a CV from HTML/CSS?

Instead of manually editing a Word or Google Docs file every time the resume needs to be updated, the content is kept in simple HTML files. Any text update is made once, and the PDF is automatically regenerated with a single command, ensuring visual consistency and fast iteration.

## File Structure
- [cv_pt.html](cv_pt.html) -> Resume content in Portuguese 
- [cv_en.html](cv_en.html) -> Resume content in English
- [cv_style.css](cv_style.css) -> Print-optimized stylesheet (A4)
- [gerar_cv.py](gerar_cv.py) -> Python script that converts the HTML files into PDF.

## Prerequisites

- Python 3.10 or higher
- Virtual environment (`venv`) activated
- Windows operating system (this documentation specifically covers the Windows setup, which requires an additional step)

## Step 1 — Install WeasyPrint

With the virtual environment activated, run:

```bash
python -m pip install weasyprint
```

## Step 2 — Install the system dependency (Pango)

On Windows, WeasyPrint depends on native text rendering libraries (Pango/GObject) that are not installed alongside the Python package. Without this step, the script fails with the error: `OSError: cannot load library 'libgobject-2.0-0'`.

To fix this, you need to install MSYS2, an environment that provides these native libraries for Windows.

1. Download the official installer at: [https://www.msys2.org/](https://www.msys2.org/)
2. Run the installation keeping the default options.
3. At the end of the installation, open the "MSYS2 MSYS" terminal (it opens automatically, or can be found in the Start menu).
4. Run the command below to install Pango:

```bash
pacman -S mingw-w64-x86_64-pango
```

5. Confirm the installation by typing `Y` when prompted.
6. Close the MSYS2 terminal normally.

## Step 3 — Configure the environment variable

WeasyPrint needs to know where the libraries installed by MSYS2 are located. This is done through the `WEASYPRINT_DLL_DIRECTORIES` environment variable.

**Option A — Temporary configuration (valid only for the current terminal session)**

In PowerShell, with the virtual environment activated, run:

```bash
$env:WEASYPRINT_DLL_DIRECTORIES = "C:\msys64\mingw64\bin"
```

This option needs to be run again every time a new terminal session is opened.

**Option B — Permanent configuration (recommended)**

To avoid repeating the command in every session, configure the variable directly in the Windows Environment Variables:

1. Open Control Panel → System → Advanced System Settings.
2. Click "Environment Variables".
3. Under "User variables", click "New".
4. Variable name: `WEASYPRINT_DLL_DIRECTORIES`
5. Variable value: `C:\msys64\mingw64\bin`
6. Confirm and restart the terminal (or VS Code) for the variable to take effect.

Note: this configuration is set at the operating system level (user scope), not inside the Python virtual environment, since it is a native system dependency rather than a Python package.

## Step 4 — Run the generation script

Once all dependencies are installed and the environment variable is set, run:

```bash
python gerar_cv.py
```

The script reads `cv_pt.html` and `cv_en.html`, applies the styling defined in `cv_style.css`, and generates two files in the same folder `cv/`: `Rodrigo_Aguiar_CV_PT.pdf`and `Rodrigo_Aguiar_CV_EN.pdf`.
Therefore, replace my name by yours at [gerar_cv.py](gerar_cv.py).


## Maintenance Notes

* Any content updates to the resume should be made directly in [cv_pt.html](cv_pt.html) and [cv_en.html](cv_en.html).
* Layout, font, margin, or spacing changes should be made in [cv_style.css](cv_style.css).
* It is not recommended to generate the PDF directly from the public portfolio pages (`index.html`, `career.html`), since they contain navigation elements and a grid-based layout that is not suitable for print pagination. For this reason, the CV files are kept independent and dedicated specifically to this purpose.

## Tech Stack

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![WeasyPrint](https://img.shields.io/badge/WeasyPrint-orange?style=for-the-badge)
![MSYS2](https://img.shields.io/badge/MSYS2-6D8086?style=for-the-badge&logo=msys2&logoColor=white)

## References

* WeasyPrint official documentation: [https://doc.courtbouillon.org/weasyprint/stable/](https://doc.courtbouillon.org/weasyprint/stable/)
* MSYS2: [https://www.msys2.org/](https://www.msys2.org/)

## Author

**Rodrigo Aguiar** — Senior Engineer | AI & Data Engineer

