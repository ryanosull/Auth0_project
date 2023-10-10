class ApplicationController < ActionController::API
    # ↓ from: https://github.com/learn-co-curriculum/react-rails-project-setup-guide#cookies--sessions
    include ActionController::Cookies

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end

end
