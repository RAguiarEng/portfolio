from weasyprint import HTML
from pathlib import Path

BASE_DIR = Path(__file__).parent

arquivos = {
    "en": "cv_en.html",
    "pt": "cv_pt.html",
}

for idioma, nome_arquivo in arquivos.items():
    caminho_html = BASE_DIR / nome_arquivo
    if not caminho_html.exists():
        print(f"[AVISO] Arquivo não encontrado: {caminho_html}")
        continue

    saida_pdf = BASE_DIR / f"Rodrigo_Aguiar_CV_{idioma.upper()}.pdf"
    HTML(filename=str(caminho_html), base_url=str(BASE_DIR)).write_pdf(str(saida_pdf))
    print(f"[OK] CV gerado: {saida_pdf}")